import Image from "next/image"
import { Inter } from "next/font/google"
import { MainLayout } from "@/layouts/MainLayout"
import { DarkLayout } from "@/layouts/DarkLayout"
import styles from "./style.module.sass"

const inter = Inter({ subsets: ["latin"] })

const FourPage = () => {
  return (
    <>
      <h1 className={inter.className}>Four Page</h1>
      <Image
        src="/04.jpg"
        alt="image four page"
        width={300}
        height={300}
      />
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
        className={styles.pokemon}
        alt="pokemon"
        width={200}
        height={200}
      />
      <code className={styles.code}>pages/four.jsx</code>
    </>
  )
}

FourPage.getLayout = (page) => {
  return (
    <MainLayout title="Four Page">
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}

export default FourPage
