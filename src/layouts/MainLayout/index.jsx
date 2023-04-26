import Head from "next/head"
import { Navbar } from "@/components/Navbar"
import styles from "./style.module.sass"

const origin = (typeof window === "undefined") ? "" : window.location.origin

export const MainLayout = ({ children, title="Default" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="santraez" />
        <meta name="description" content={`Informacion sobre ${title}`} />
        <meta name="keywords" content={`${title}, page, keywords`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`Pokemon Information for ${title}`} />
        <meta property="og:description" content={`The pokemon are the little ${title} and are shorts`} />
        <meta property="og:image" content={`${origin}/banner.png`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className={styles.container}>
          <h3>Main Layout</h3>
          {children}
        </div>
      </main>
    </>
  )
}
