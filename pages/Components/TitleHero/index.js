import styles from "./titleHero.module.css"
import { dataset } from "../Events/data"

export default function Home(props) {
	let id = props.id

	let required = dataset.filter((item) => {
		return item.id == id
	})

	let heading = required[0].heading
	let subHeading = required[0].description

	return (
		<div className={styles.titleHeroContainer}>
			<span className={styles.heading}>{heading}</span>
			<span className={styles.subHeading}>{subHeading}</span>
		</div>
	)
}
