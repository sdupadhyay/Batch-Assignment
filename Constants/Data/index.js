import designingDashboard from "@/public/designing-dashboard.png";
import vibrantPortraits from "@/public/vibrant-portraits.png";
import Days from "@/public/36-days.png";
import components from "@/public/components.png";
import coverImage2 from "@/public/dashboard-cover-image-2.png";
export const homePageData = {
	"Recent-Post": [
		{
			title: "Making a design system from scratch",
			createdAt: "12 Feb 2023",
			tag: "Design, Pattern",
			description:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
		},
		{
			title: "Building a website from Scratch",
			createdAt: "17 Mar 2024",
			tag: "Development, Design",
			description:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
		},
		{
			title: "Creating pixel perfect icon in Figma",
			createdAt: "28 jan 2024",
			tag: "Figma icon design",
			description:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
		},
	],
	"Feature-Work": [
		{
			id: 1,
			image: designingDashboard,
			title: "Designing Dashboard",
			year: "2020",
			tag: "Dashboard",
			description:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
		},
		{
			id: 2,
			image: vibrantPortraits,
			title: "Vibrant Portraits of 2020 Dashboard",
			year: "2018",
			tag: "Illustration",
			description:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
		},
		{
			id: 3,
			image: Days,
			title: "36 Days of Malayalam type",
			year: "2018",
			tag: "Typography",
			description:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
		},
	],
};
export const blogPageData = [
	{
		title: "Making a design system from scratch",
		createdAt: "12 Feb 2023",
		tag: "Design, Pattern",
		description:
			"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	},
	{
		title: "Building a website from Scratch",
		createdAt: "17 Mar 2024",
		tag: "Development, Design",
		description:
			"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	},
	{
		title: "Creating pixel perfect icon in Figma",
		createdAt: "28 jan 2024",
		tag: "Figma icon design",
		description:
			"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	},
	{
		title: "Creating REST API with node js",
		createdAt: "20 Mar 2024",
		tag: "API design",
		description:
			"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	},
];
export const workPageData = [
	{
		id: 1,
		image: designingDashboard,
		title: "Designing Dashboard",
		heading: "Designing Dashboards with usability in mind",
		year: "2020",
		tag: "Dashboard",
		cover_image_1: "",
		cover_image_2: coverImage2,
		description:
			"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	},
	{
		id: 2,
		image: vibrantPortraits,
		title: "Vibrant Portraits of 2020 Dashboard",
		heading: "Designing Dashboards with usability in mind",
		year: "2018",
		tag: "Illustration",
		description:
			"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	},
	{
		id: 3,
		image: Days,
		title: "36 Days of Malayalam type",
		heading: "Designing Dashboards with usability in mind",
		year: "2018",
		tag: "Typography",
		description:
			"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	},
	{
		id: 4,
		image: components,
		title: "Components",
		heading: "Designing Dashboards with usability in mind",
		year: "2018",
		tag: "Components, Design",
		description:
			"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	},
];
export const getWorkDetailPageData = (id) => {
	let data = workPageData?.filter((ele) => ele?.id == id);
	return data;
};
