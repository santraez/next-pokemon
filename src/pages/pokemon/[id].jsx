import { useState } from "react"
import Image from "next/image"
import Head from "next/head"
import { Inter } from "next/font/google"
import confetti from "canvas-confetti"
import { MainLayout } from "@/layouts/MainLayout"
import { DarkLayout } from "@/layouts/DarkLayout"
import { PokeCard } from "@/components/PokeCard"
import { ajaxMethod } from "@/helpers/ajaxMethod"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import styles from "./style.module.sass"

const inter = Inter({ subsets: ["latin"] })

export const getStaticPaths = async () => {
  const pokemons151 = [...Array(151)].map((_, index) => `${index + 1}`)
  return {
    paths: pokemons151.map((value) => ({
      params: { id: value }
    })),
    // fallback: false
    fallback: "blocking"
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  let pokemon
  try {
    const{ data } = await ajaxMethod({
      method: "GET",
      url:  `https://pokeapi.co/api/v2/pokemon/${id}`
    })
    pokemon = {
      id: data.id,
      name: data.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    }
  } catch (err) {
    pokemon = null
  }
  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }
  return {
    props: {
      pokemon
    },
    revalidate: 86400 // 60 * 60 * 24
  }
}

const PokemonPage = ({ pokemon }) => {
  const [local, setLocal] = useLocalStorage("favorites")
  const [isFavorite, setIsFavorite] = useState(local.includes(pokemon.id))
  const onToggleFavorite = () => {
    if (isFavorite) {
      setLocal(local.filter((value) => value !== pokemon.id))
      setIsFavorite(false)
    } else {
      setLocal([...local, pokemon.id])
      setIsFavorite(true)
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: 90,
        origin: {
          x: .5,
          y: .7
        }
      })
    }
  }
  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <h1 className={inter.className}>{pokemon.name}</h1>
      <PokeCard pokemon={pokemon} />
      <button onClick={onToggleFavorite}>{(isFavorite) ? "Delete Favorite" : "Add Favorite"}</button>
      <p>is favorite?? {(isFavorite) ? "YES" : "NO"}</p>
    </>
  )
}

PokemonPage.getLayout = (page) => {
  return (
    <MainLayout title="">
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}

export default PokemonPage
