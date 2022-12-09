import styles from "./contact.module.css"
import { v4 as UUID4 } from "uuid"
import { members } from "./data"

export default function Home() {
	return (
		<>
			<span id="contact"></span>
			<div className={styles.contact}>
				<span className={styles.heading}>Contact</span>
				<div className={styles.contactContainer}>
					<Members members={members} />
				</div>
			</div>
		</>
	)
}

function Person(props) {
	return (
		<div className={styles.personItem}>
			<span className={styles.personItemName}>{props.personName}</span>
			<span className={styles.personItemEmail}>{props.phone}</span>
			<span className={styles.personItemPost}>{props.post}</span>
		</div>
	)
}

function Members(props) {
	return (
		<div className={styles.contactItem}>
			<div className={styles.contactItemContent}>
				{props.members.map((item) => {
					return (
						<Person 
							key={UUID4()}
							personName={item.personName}
							phone={item.phone}
							post={item.post}
						/>
					)
				}
				)}
			</div>
		</div>
	)
}