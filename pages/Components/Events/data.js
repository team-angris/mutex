export default function Home() {
	return <></>
}

let dataset = [
	{
		heading: "Technical",
		numberOfEvents: "10",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis sagittis metus nec consectetur. Nullam vel semper quam. Donec fermentum vel enim quis consectetur. Pellentesque at neque dapibus, sollicitudin purus sit amet, vehicula felis.",
		hyperlink: "/technical",
		bgImageURL: "./events/technical.webp",
	},
	{
		heading: "Non Technical",
		numberOfEvents: "8",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis sagittis metus nec consectetur. Nullam vel semper quam. Donec fermentum vel enim quis consectetur. Pellentesque at neque dapibus, sollicitudin purus sit amet, vehicula felis.",
		hyperlink: "/nontechnical",
		bgImageURL: "./events/nontechnical.webp",
	},
	{
		heading: "Mega",
		numberOfEvents: "1",
		description:
			"Win more with this surprise event. Will be disclosed on the day of the event.",
		hyperlink: "/megaevent",
		bgImageURL: "./events/nontechnical.webp",
	},
]

export { dataset }
