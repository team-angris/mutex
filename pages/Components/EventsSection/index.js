import styles from "./eventSection.module.css"
import { useState } from "react"
let data = [
	{
		titleName: "Event 1",
		id: 10001,
		about: "This event is all about nukes",
	},
	{
		titleName: "Event 2",
		id: 10002,
		about: "This event is all about bombs",
	},
	{
		titleName: "Event 3",
		id: 10003,
		about: "This event is all about guns",
	},
]

export default function Home() {
	return (
		<>
			<EventsSection />
		</>
	)
}

function EventsSection() {
	let [selected, setSelected] = useState(10001)

	return (
		<div className={styles.container}>
			<div className={styles.eventContainer}>
				<div className={styles.eventList}>
					{data.map((item) => (
						<EventList
							item={item}
							selected={selected}
							setSelected={setSelected}
							key={item.id}
						/>
					))}
				</div>
				<div className={styles.eventDetails}>
					{data.map((item) => (
						<EventDetails 
                            item={item}
                            selected={selected}
                            key={item.id}
                        />
					))}
				</div>
			</div>
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
			<h3>{props.item.titleName}</h3>
			<p>{props.item.about}</p>


function Prize(props) {
	return (
		<div className={styles.prize}>
			<span className={styles.subHeadingTitle}>Prize Money 🤑</span>
			<span className={styles.prizeSub}>
				{props.prize.map((amount) => (
					<div key={amount}>
						<span>{amount}</span>
					</div>
				))}
			</span>
		</div>
	)
}

function Rounds(props) {
	return (
		<div className={styles.rounds}>
			<span className={styles.subHeadingTitle}>Rounds</span>
			<span className={styles.roundsSub}>
				{props.rounds.map((round) => (
					<div key={round}>
						<span>{round}</span>
					</div>
				))}
			</span>
		</div>
	)
}

function Organizers(props) {
	return (
		<div className={styles.organizers}>
			<span className={styles.subHeadingTitle}>Organizers</span>
			<span className={styles.organizersSub}>
				{props.organizers.map((organizer) => (
					<div key={organizer}>
						<span>{organizer}</span>
					</div>
				))}
			</span>
		</div>
	)
}
