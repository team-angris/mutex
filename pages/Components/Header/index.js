import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
	return (
		<div className={styles.container} id="header">
			<div className={styles.flexOne}></div>

			<NavOption tagName="Home" hyperlink="" />
			<NavOption tagName="About" hyperlink="about" />
			<NavOption tagName="Events" hyperlink="events" />
			<NavOption tagName="Sponsors" hyperlink="sponsors" />
			<NavOption tagName="Contacts" hyperlink="contact" />
		</div>
	)
}

export function NavOption(props) {
	return (
		<div className={styles.navOption}>
			<Link href={`/#${props.hyperlink}`}>
				<span className={styles.navLink}>{props.tagName}</span>
			</Link>
		</div>
	)
}
