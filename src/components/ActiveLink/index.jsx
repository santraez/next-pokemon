import { useRouter } from "next/router"
import Link from "next/link"
import styles from "./style.module.sass"

export const ActiveLink = ({ children, href }) => {
  const { asPath } = useRouter()
  return (
    <Link
      className={(asPath === href) ? styles.active : styles.inactive}
      href={href}
    >
      {children}
    </Link>
  )
}
