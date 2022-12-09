import styles from "./eventSection.module.css"
import { useState } from "react"
import { workshop } from "./data"
import { Organizers, ApplyNow } from "./index"

export default function Home(props) {
	let [selected, setSelected] = useState(10001)

	return (
		<div className={styles.container}>
			<div className={styles.eventContainer}>
				<div className={styles.eventList}>
					{workshop.map((item) => (
						<EventList
							item={item}
							selected={selected}
							setSelected={setSelected}
							key={item.id}
						/>
					))}
				</div>
				<div className={styles.eventDetails}>
					{workshop.map((item) => (
						<EventDetails
							item={item}
							selected={selected}
							key={item.id}
						/>
					))}
				</div>
			</div>
			<div style={{ height: "50px" }}></div>
		</div>
	)
}

function EventList(props) {
	return (
		<div
			className={
				props.selected === props.item.id
					? styles.eventItemActive
					: styles.eventItem
			}
			onClick={() => props.setSelected(props.item.id)}
		>
			<h3>{props.item.titleName}</h3>
		</div>
	)
}

function EventDetails(props) {
	return (
		<div
			className={
				props.selected === props.item.id
					? styles.eventDetailsActive
					: styles.eventDetailsHidden
			}
		>
			<Details item={props.item} />
		</div>
	)
}

function Details(props) {
	return (
		<div className={styles.actualEventDetails}>
			<LeftDetails item={props.item} />
			<div className={styles.eventRight}>
				<img src={props.item.posterUrl} alt="Event Image" />
			</div>
		</div>
	)
}

function LeftDetails(props) {
	return (
		<div className={styles.eventLeft}>
			<h3>{props.item.titleName}</h3>
			<p>{props.item.about}</p>

			<TopDetails item={props.item} />
			<Organizers organizers={props.item.organizers} />
			<ApplyNow />
		</div>
	)
}

function TopDetails(props) {
	return (
		<div className={styles.topDetails}>
			<div className={styles.detail}>
				<span>Time</span>
				<img src="./svgs/time.svg" alt="Time" height={20} width={20} />
				<span className={styles.detailSub}>{props.item.time}</span>
			</div>
		</div>
	)
}
