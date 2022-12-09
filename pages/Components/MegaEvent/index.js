import styles from "./megaevent.module.css"

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<span className={styles.wrapperSpan}>
				Will be disclosed on the day of the event.
			</span>
			<span className={styles.wrapperSpan}>
				Stay Tuned!!
			</span>
		</div>
	)
}
