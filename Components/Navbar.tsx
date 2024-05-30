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
	const themeImage = (
		<div>
			{theme == "light" ? (
				<svg
					className="dark:hidden"
					width="16"
					height="16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="fill-slate-300"
						d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
					/>
					<path
						className="fill-slate-400"
						d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
					/>
				</svg>
			) : (
				<svg
					className="hidden dark:block"
					width="16"
					height="16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="fill-slate-400"
						d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
					/>
					<path
						className="fill-slate-500"
						d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
					/>
				</svg>
			)}
		</div>
	);
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
					<li
						onClick={() =>
							setTheme((pre) => (pre == "light" ? "dark" : "light"))
						}
						className="text-lg cursor-pointer font-medium rounded-full dark:text-[#ffffff] border px-5 flex gap-2 items-center"
					>
						{themeImage}
						{theme == "light" ? "DARK" : "LIGHT"}
					</li>
				</ul>
			</nav>
			<nav className="px-5 py-3 block md:hidden">
				<button
					onClick={() => setTheme((pre) => (pre == "light" ? "dark" : "light"))}
					className="text-lg font-medium rounded-full dark:text-[#ffffff] border px-5 flex gap-4 items-center"
				>
					{themeImage}
					{theme == "light" ? "DARK" : "LIGHT"}
				</button>

				<div className="flex justify-end">
					<Image alt="Mobile Menu" src={mobileMenue} width={30} />
				</div>
			</nav>
		</>
	);
};
