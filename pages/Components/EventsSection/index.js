import styles from "./eventSection.module.css"
import { useState } from "react"
import { techData, nonTechData } from "./data"

export default function Home(props) {
	return (
		<>
			<EventSection type={props.type} />
		</>
	)
}

function EventSection(props) {

    let type = props.type
    let data = type === "tech" ? techData : nonTechData
	
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
            <div style={{height: "50px"}}></div>
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
			<Prize prize={props.item.prize} />
			<Rounds rounds={props.item.rounds} />
			<Organizers organizers={props.item.organizers} />
		</div>
	)
}

function TopDetails(props) {
	return (
		<div className={styles.topDetails}>
			<div className={styles.detail}>
				<span>Team Type</span>
				<img
					src="./svgs/team.svg"
					alt="Team Type"
					height={20}
					width={20}
				/>
				<span className={styles.detailSub}>{props.item.teamType}</span>
			</div>
			<div className={styles.detail}>
				<span>Team Size</span>
				<img
					src="./svgs/size.svg"
					alt="Team Size"
					height={20}
					width={20}
				/>
				<span className={styles.detailSub}>{props.item.teamSize}</span>
			</div>
			<div className={styles.detail}>
				<span>Time</span>
				<img src="./svgs/time.svg" alt="Time" height={20} width={20} />
				<span className={styles.detailSub}>{props.item.time}</span>
			</div>
		</div>
	)
}

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
