import styles from "./header.module.css"

export default function Header() {
	return (
		<div className={styles.container}>
			<div className={styles.flexOne}></div>
			
			<NavOption tagName="Home" />
			<NavOption tagName="About" />
			<NavOption tagName="Events" />
			<NavOption tagName="Sponsors" />
			<NavOption tagName="Contacts" />
		</div>
	)
}

export function NavOption(props) {
	return (

		<div className={styles.navOption}>
			<span>{props.tagName}</span>
		</div>

	)
}
