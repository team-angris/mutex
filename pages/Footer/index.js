import styles from "./footer.module.css"

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footerContainer}>
				<DesignBy link={"https://www.behance.net/snehapillai2"} designBy={"Sneha Pillai"} />
				<PoweredBy />
				<ARR />
			</div>
		</div>
	)
}

function DesignBy(props) {
	return (
		<div className={styles.designBy}>
			<span>Design by {" "}</span>
			<a
				className={styles.designByLink}
				href={props.link}
				target="_blank"
				rel="noreferrer noopener"
			>
				{props.designBy}
			</a>
			<span>{"↗"}</span>
		</div>
	)
}

function PoweredBy() {
	return (
		<div className={styles.poweredBy}>
			<span>Powered by {" "}</span>
			<a
				className={styles.poweredByLink}
				href="https://angris.in"
				target="_blank"
				rel="noreferrer noopener"
			>
				{"Angris"}
			</a>
			<span>{"↗"}</span>
		</div>
	)
}

function ARR() {
	let year = new Date().getFullYear()

	return (
		<div className={styles.allRightsReserved}>
			<span>All rights reserved © {year} by Mutex</span>
		</div>
	)
}
