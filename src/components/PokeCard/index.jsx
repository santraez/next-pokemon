import { useRouter } from "next/router"
import Image from "next/image"
import styles from "./style.module.sass"

export const PokeCard = ({ pokemon: { id, name, image } }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <div className={styles.card}>
      <span>#{id}</span>
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        onClick={handleClick}
      />
      <span>{name}</span>
    </div>
  )
}
