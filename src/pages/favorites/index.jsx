import { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import Image from "next/image"
import { useRouter } from "next/router"
import { MainLayout } from "@/layouts/MainLayout"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import styles from "./style.module.sass"

const inter = Inter({ subsets: ["latin"] })

const FavoritesPage = () => {
  const [local] = useLocalStorage("favorites", [])
  const [favorites, setFavorites] = useState([])
  const router = useRouter()
  useEffect(() => {
    setFavorites(local)
  }, [local])
  const handleClick = (id) => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <MainLayout title="Favorites Page">
      <h1 className={inter.className}>Favorites Pokemons</h1>
      {
        (favorites.length === 0) ? (
          <p>You dont have any favorite pokemon</p>
        ) : (
          favorites.map((id, index) => (
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              className={styles.pokemon}
              alt="pokemon"
              width={70}
              height={70}
              key={index}
              onClick={() => handleClick(id)}
            />
          ))
        )
      }
    </MainLayout>
  )
}

export default FavoritesPage
