import styles from "./contact.module.css"
import { v4 as UUID4 } from "uuid"
import { technical, nonTechnical } from "./data"

export default function Home() {
	return (
		<div className={styles.contact} id="contact">
			<span className={styles.heading}>Contact</span>
			<div className={styles.contactContainer}>
				<Technical technical={technical} />
				<NonTechnical nonTechnical={nonTechnical} />
			</div>
		</div>
	)
}

function Person(props) {
	return (
		<div className={styles.personItem}>
			<span className={styles.personItemName}>{props.personName}</span>
			<span className={styles.personItemEmail}>{props.email}</span>
		</div>
	)
}

function Technical(props) {
	return (
		<div className={styles.contactItem}>
			<span className={styles.contactItemHeading}>Technical Events</span>
			<div className={styles.contactItemContent}>
				{props.technical.map((item) => {
					return (
						<Person 
							key={UUID4()}
							personName={item.personName}
							email={item.email}
						/>
					)
				}
				)}
			</div>
		</div>
	)
}

function NonTechnical(props) {
	return (
		<div className={styles.contactItem}>
			<span className={styles.contactItemHeading}>Non Technical Events</span>
			<div className={styles.contactItemContent}>
				{props.nonTechnical.map((item) => {
					return (
						<Person 
							key={UUID4()}
							personName={item.personName}
							email={item.email}
						/>
					)
				}
				)}
			</div>
		</div>
	)
}