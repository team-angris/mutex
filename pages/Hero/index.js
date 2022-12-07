import styles from "./hero.module.css"

export default function Home() {
	return (
		<div className={styles.hero}>
			<div>
				<img
					className={styles.heroImage}
					src="./mutex.webp"
					alt="Mutex"
					height={300}
					width={521}
				/>
			</div>
            <Title />
		</div>
	)
}

function Title() {
	return (
		<span className={styles.title}>
			DevJams is one of a kind hackathon conducted by Google Developer
			Student Clubs VIT every year to encourage tech enthusiasts from
			across the country to develop their ideas for the future.
		</span>
	)
}
