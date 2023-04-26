import { ActiveLink } from "@/components/ActiveLink"
import styles from "./style.module.sass"
import Link from "next/link"

const menuItems = [
  {
    text: "One",
    href: "/"
  },
  {
    text: "Two",
    href: "/two"
  },
  {
    text: "Three",
    href: "/three"
  },
  {
    text: "Four",
    href: "/four"
  },
  {
    text: "Favorites",
    href: "/favorites"
  },
]

export const Navbar = () => {
  return (
    <>
      <Link href="/">
        <h2>Example</h2>
      </Link>
      <nav className={styles.menu}>
        {
          menuItems.map((item, index) => (
            <ActiveLink key={index} href={item.href}>
              {item.text}
            </ActiveLink>
          ))
        }
      </nav>
    </>
  )
}
