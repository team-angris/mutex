import styles from "./titleHero.module.css"

export default function Home(props) {
	return (
		<div className={styles.titleHeroContainer}>
			<span className={styles.heading}>{props.heading}</span>

			<span className={styles.subHeading}>
				MUTEX, an intra-college technological festival with it's primary
				goal to teach the juniors the numerous technical and analytical
				abilities necessary to thrive in the current IT sector with
				technical and non-technical events
			</span>
		</div>
	)
}
