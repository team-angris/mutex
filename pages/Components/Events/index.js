import { v4 as uuidv4 } from "uuid"
import styles from "./events.module.css"
import { dataset } from "./data"

export default function Home() {
	return (
		<>
			<span id="events"></span>
			<div className={styles.events}>
				<span className={styles.heading}>Events</span>

				<div className={styles.eventsContainer}>
					{dataset.map((item) => {
						let id = uuidv4()
						return (
							<EventCard
								key={id}
								heading={item.heading}
								numberOfEvents={item.numberOfEvents}
								description={item.description}
								hyperlink={item.hyperlink}
								bgImageURL={item.bgImageURL}
							/>
						)
					})}
				</div>

				<div className={styles.designThing}></div>
			</div>
		</>
	)
}

function EventCard(props) {
	// props would contain heading, numberOfEvents, description, hyperlink, bgImageURL

	return (
		<div
			className={styles.eventCard}
			style={{ backgroundImage: `url(${props.bgImageURL})` }}
		>
			<span className={styles.eventHeading}>{props.heading}</span>
			<span className={styles.eventHeading}>Events</span>
			<span className={styles.numberOfEvents}>
				{props.numberOfEvents}
				{"+ EVENTS"}
			</span>
			<span className={styles.description}>{props.description}</span>
			<a href={props.hyperlink} className={styles.hyperlink}>
				<span>Explore</span>
			</a>
		</div>
	)
}
