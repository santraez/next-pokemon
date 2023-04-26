import Image from "next/image"
import { Inter } from "next/font/google"
import { MainLayout } from "@/layouts/MainLayout"
import { ajaxMethod } from "@/helpers/ajaxMethod"
import { PokeCard } from "@/components/PokeCard"
import styles from "./style.module.sass"

const inter = Inter({ subsets: ["latin"] })

export const getStaticProps = async (context) => {
  const{ data: { results } } = await ajaxMethod({
    method: "GET",
    url:  "https://pokeapi.co/api/v2/pokemon?limit=151"
  })
  const pokemons = results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }))
  console.log("server only")
  return {
    props: {
      pokemons
    }
  }
}

const OnePage = ({ pokemons }) => {
  return (
    <MainLayout title="One Page">
      <h1 className={inter.className}>One Page</h1>
      <Image
        src="/01.jpg"
        alt="image one page"
        width={300}
        height={300}
      />
      <Image
        src="/banner.png"
        alt="banner"
        className={styles.banner}
        width={200}
        height={150}
      />
      <ul>
        {
          pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              <PokeCard pokemon={pokemon} />
            </li>
          ))
        }
      </ul>
      <code className={styles.code}>pages/index.jsx</code>
    </MainLayout>
  )
}

export default OnePage
