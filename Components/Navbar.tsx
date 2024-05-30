import { BlogPageType, WorkPageType } from "@/Constants/pageType";
import mobileMenue from "@/public/menu.png";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";

type props = {
	pageType: string;
};
export const Navbar: React.FC<props> = ({ pageType }): ReactElement => {
	const navData = [
		{ title: "Works", isActive: pageType == WorkPageType, link: "/work" },
		{ title: "Blog", link: "/blog", isActive: pageType == BlogPageType },
		{ title: "Contact", link: "/contact" },
	];
	const [theme, setTheme] = useState("light");
	const toogleTheme = () => {
		document.documentElement.setAttribute("class", theme);
	};
	useEffect(() => {
		toogleTheme();
	}, [theme]);
	return (
		<>
			<nav className="px-10 py-3 hidden md:block">
				<ul className="flex justify-end gap-10">
					{navData?.map((nav, ind) => (
						<li
							className={`text-lg font-medium dark:text-[#ffffff] ${
								nav?.isActive ? "text-amber-600" : ""
							}`}
							key={ind}
						>
							<Link href={nav?.link || ""}>{nav?.title}</Link>
						</li>
					))}
					<button
						onClick={() =>
							setTheme((pre) => (pre == "light" ? "dark" : "light"))
						}
						className="text-lg font-medium rounded-full dark:text-[#ffffff] border px-5"
					>
						{theme == "light" ? "DARK" : "LIGHT"}
					</button>
				</ul>
			</nav>
			<nav className="px-5 py-3 block md:hidden">
				<button
					onClick={() => setTheme((pre) => (pre == "light" ? "dark" : "light"))}
					className="text-lg font-medium rounded-full dark:text-[#ffffff] border px-5"
				>
					{theme == "light" ? "DARK" : "LIGHT"}
				</button>
				<div className="flex justify-end">
					<Image alt="Mobile Menu" src={mobileMenue} width={30} />
				</div>
			</nav>
		</>
	);
};
