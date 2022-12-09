export default function Home() {
	return <></>
}

let dataset = [
	{
		heading: "Technical",
		numberOfEvents: "10",
		description:
			"To teach participants the numerous abilities needed to thrive in the technology economy, technical activities are held. Testing from many technology fields gives college life a touch of experiential learning. The prizes given out at the conclusion of each event serve to encourage participation.",
		hyperlink: "/technical",
		bgImageURL: "./events/technical.webp",
	},
	{
		heading: "Non Technical",
		numberOfEvents: "8",
		description:
			"We've got you covered, participants from non-technical disciplines! Numerous non-technical events that are completely branch/degree independent are also planned. Another experience that differs from the usual technical college life is this one, thus giving the symposia a dash of fun.",
		hyperlink: "/nontechnical",
		bgImageURL: "./events/nontechnical.webp",
	},
	{
		heading: "Workshop",
		numberOfEvents: "8",
		description:
			"Numerous technical workshops are held because they offer students the chance to try out new techniques and pass/fail in a secure learning environment. They are a wonderful approach to develop hands-on skills. The purpose of this exercise is to introduce new concepts, encourage students to conduct independent research, and encourage process practices.",
		hyperlink: "/workshop",
		bgImageURL: "./events/workshop.webp",
	},
	{
		heading: "Mega",
		numberOfEvents: "1",
		description:
			"Win more with this surprise event. Will be disclosed on the day of the event.",
		hyperlink: "/megaevent",
		bgImageURL: "./events/surprise.webp",
	},
]

export { dataset }
