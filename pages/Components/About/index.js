import styles from "./about.module.css"
import Carousel from "react-gallery-carousel"
import "react-gallery-carousel/dist/index.css"

export default function Home() {
	return (
		<div className={styles.aboutSection} id="about">
			<div className={styles.aboutContainer}>
				<span className={styles.aboutHeadingText}>About Mutex'22</span>

				<span className={styles.aboutContentText}>
					The Madras Institute of Technology's Department of
					Information Technology's Information Technology Association
					(ITA) hosts MUTEX, an intra-college technological festival.
					MUTEX's primary goal is to teach the juniors the numerous
					technical and analytical abilities necessary to thrive in
					the current IT sector. In light of this, technical
					activities and events will be held as well as guest lectures
					on personality development and leadership. It is accessible
					to students from all disciplines and grade levels. This
					event includes a wide variety of non-technical events like
					connections and Rubik's cube solving as well as technical
					events like various forms of coding and workshops.
				</span>
			</div>

			<Images />
		</div>
	)
}

const Images = () => {
	const images = [1, 3, 4, 5].map((number) => ({
		src: `./posters/about/${number}.webp`,
	}))

	return (
		<Carousel
			images={images}
			style={{ height: 300, width: 300 }}
			hasMediaButton={false}
			hasIndexBoard={false}
			hasLeftButton={"bottomLeft"}
			hasRightButton={"bottomRight"}
			hasThumbnails={false}
		/>
	)
}
