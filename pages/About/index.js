import styles from "./about.module.css"
import Carousel from "react-gallery-carousel"
import "react-gallery-carousel/dist/index.css"

export default function Home() {
	return (
		<div className={styles.aboutSection}>
			<div className={styles.aboutContainer}>
				<span className={styles.aboutHeadingText}>About Mutex'22</span>

				<span className={styles.aboutContentText}>
					DevJams is one of a kind hackathon conducted by Google
					Developer Student Clubs VIT every year to encourage tech
					enthusiasts from across the country to develop their ideas
					for the future. The hackathon focuses on providing students
					and upcoming entrepreneurs with a platform to develop,
					compete, network and present their ideas to solve real-world
					problems. We have been successfully conducting DevJams
					(previously known as Devfest) for 6 years now. DevJams'22
					will be the seventh edition through which we hope to bring
					innovative minds from all around the globe under one banner.
				</span>
			</div>

			<Images />
		</div>
	)
}

const Images = () => {
	const images = [9, 8, 7, 6, 5].map((number) => ({
		src: `https://placedog.net/${number}00/${number}00?id=${number}`,
	}))

	return <Carousel images={images} style={{ height: 300, width: 300 }} />
}
