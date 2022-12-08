import styles from "./header.module.css"

export default function Header() {
	return (
		<div className={styles.container} id="header">
			<div className={styles.flexOne}></div>
			
			<NavOption tagName="Home" hyperlink="home"/>
			<NavOption tagName="About" hyperlink="about"/>
			<NavOption tagName="Events" hyperlink="events"/>
			<NavOption tagName="Sponsors" hyperlink="sponsors"/>
			<NavOption tagName="Contacts" hyperlink="contact"/>
		</div>
	)
}

export function NavOption(props) {

	let handleClick = () => {
		window.location = `#${props.hyperlink}`
	}

	return (
		<div className={styles.navOption}>
			<span className={styles.navSpan} onClick={handleClick}>{props.tagName}</span>
		</div>

	)
}
