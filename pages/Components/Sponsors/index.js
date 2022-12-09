import styles from "./sponsors.module.css"

export default function Home() {
	return (
		<>
			<span id="sponsors"></span>
			<div className={styles.sponsors}>
				<span className={styles.heading}>Sponsors</span>

				<div className={styles.sponsorsContainer}>
					<Angris />
					<PrivacyDefenders />
					<MeowIt />
				</div>
			</div>
		</>
	)
}

function Angris() {
	return (
		<a href="https://angris.pages.dev" rel={"noopener noreferrer"} target={"_blank"}>
			<img
				src="./sponsors/angris.webp"
				alt="Angris"
				height={130}
				width="auto"
				aria-label="Angris"
				title="Angris"
			/>
		</a>
	)
}

function PrivacyDefenders() {
	return (
		<a href="https://privacydefenders.pages.dev" rel={"noopener noreferrer"} target={"_blank"}>
			<img
				src="./sponsors/privacydefenders.webp"
				alt="Privacy Defenders"
				height={130}
				width="auto"
				aria-label="Privacy Defenders"
				title="Privacy Defenders"
			/>
		</a>
	)
}

function MeowIt() {
	return (
		<a href="https://meowit.pages.dev" rel={"noopener noreferrer"} target={"_blank"}>
			<img
				src="./sponsors/meowit.webp"
				alt="Meow It"
				height={130}
				width="auto"
				aria-label="Meow It"
				title="Meow It"
			/>
		</a>
	)
}
