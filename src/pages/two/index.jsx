import Image from "next/image"
import { Inter } from "next/font/google"
import { MainLayout } from "@/layouts/MainLayout"
import { DarkLayout } from "@/layouts/DarkLayout"
import styles from "./style.module.sass"

const inter = Inter({ subsets: ["latin"] })

const TwoPage = () => {
  return (
    <>
      <h1 className={inter.className}>Two Page</h1>
      <Image
        src="/02.jpg"
        alt="image two page"
        width={300}
        height={300}
      />
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
        className={styles.pokemon}
        alt="pokemon"
        width={200}
        height={200}
      />
      <code className={styles.code}>pages/two.jsx</code>
    </>
  )
}

TwoPage.getLayout = (page) => {
  return (
    <MainLayout title="Two Page">
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}

export default TwoPage
