import styles from "./hero.module.css"
import { useState, useEffect } from "react"

export default function Home() {
	return (
		<div className={styles.hero}>
            <HeroImage />
			<Title />
			<Timer />
			<Explore />
		</div>
	)
}

function HeroImage() {
	return (
		<div>
			<img
				className={styles.heroImage}
				src="./mutex.webp"
				alt="Mutex"
				height={300}
				width={521}
			/>
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

function Timer() {
	let event = new Date("2023-10-10T00:00:00").getTime()

	let [days, setDays] = useState("😎")
	let [hours, setHours] = useState("😎")
	let [minutes, setMinutes] = useState("😎")
	let [seconds, setSeconds] = useState("😎")

	useEffect(() => {
		let interval = setInterval(() => {
			let now = new Date().getTime()
			let distance = event - now

			setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
			setHours(
				Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				)
			)
			setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
			setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<div className={styles.timer}>
			<div className={styles.timerItem}>
				<span className={styles.timerNumber}>{days}</span>
				<span className={styles.timerText}>Days</span>
			</div>
			<div className={styles.timerItem}>
				<span className={styles.timerNumber}>{hours}</span>
				<span className={styles.timerText}>Hours</span>
			</div>
			<div className={styles.timerItem}>
				<span className={styles.timerNumber}>{minutes}</span>
				<span className={styles.timerText}>Minutes</span>
			</div>
			<div className={styles.timerItem}>
				<span className={styles.timerNumber}>{seconds}</span>
				<span className={styles.timerText}>Seconds</span>
			</div>
		</div>
	)
}

function Explore() {
	return (
		<button className={styles.explore} type="button">
			Explore
		</button>
	)
}
