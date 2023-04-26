import Image from "next/image"
import { Inter } from "next/font/google"
import { MainLayout } from "@/layouts/MainLayout"
import styles from "./style.module.sass"

const inter = Inter({ subsets: ["latin"] })

export const getServerSideProps = async (context) => {
  console.log("🚀 ~ file: index.jsx:9 ~ getServerSideProps ~ context:", context.resolvedUrl)
  if (!context.resolvedUrl) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }
  return {
    props: {
      id: context.resolvedUrl,
      name: "Santiago",
      apellido: "Ramos"
    }
  }
}

const ThreePage = (props) => {
  console.log("🚀 ~ file: index.jsx:18 ~ ThreePage ~ props:", props)
  return (
    <MainLayout title="Three Page">
      <h1 className={inter.className}>{props.id}</h1>
      <Image
        src="/03.jpg"
        alt="image three page"
        width={300}
        height={300}
      />
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
        className={styles.pokemon}
        alt="pokemon"
        width={200}
        height={200}
      />
      <code className={styles.code}>pages/three.jsx</code>
    </MainLayout>
  )
}

export default ThreePage
