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
    return (<>
        <EventsSection />
    </>)
}

function EventsSection() {
	let [selected, setSelected] = useState(10001)

    return (
        <div className={styles.container}>
            <div className={styles.eventContainer}>
                <div className={styles.eventList}>
                    {data.map((item) => (
                        <div
                            className={
                                selected === item.id
                                    ? styles.eventItemActive
                                    : styles.eventItem
                            }
                            onClick={() => setSelected(item.id)}
                        >
                            <h3>{item.titleName}</h3>
                        </div>
                    ))}
                </div>
                <div className={styles.eventDetails}>
                    {data.map((item) => (
                        <div
                            className={
                                selected === item.id
                                    ? styles.eventDetailsActive
                                    : styles.eventDetailsHidden
                            }
                        >
                            <h3>{item.titleName}</h3>
                            <p>{item.about}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}
