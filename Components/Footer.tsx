import facebookIcon from "@/public/facebook-icon.png";
import instagramIcon from "@/public/instagram-icon.png";
import twitterIcon from "@/public/twitter-icon.png";
import linkedinIcon from "@/public/linkedin-icon.png";

import Image from "next/image";
export const Footer = () => {
	const currentYear = new Date().getFullYear();
	const footerData = [
		{ icon: facebookIcon, altTag: "facebook", link: "" },
		{
			icon: instagramIcon,
			altTag: "instagram",
			link: "https://www.instagram.com/batchsystems/",
		},
		{ icon: twitterIcon, altTag: "twitter" },
		{
			icon: linkedinIcon,
			altTag: "linkedin",
			link: "https://www.linkedin.com/company/batch-systems-inc/",
		},
	];
	return (
		<>
			<footer className="flex flex-col gap-3 py-10">
				<ul className="flex gap-5 justify-center">
					{footerData?.map((ele, ind) => (
						<li key={ind}>
							<a target="_blank" href={ele?.link || "#"}>
								<Image alt={ele?.altTag} src={ele?.icon} width={30} />
							</a>
						</li>
					))}
				</ul>
				<span className="text-center text-[#21243D] dark:text-[#ffffff]">
					Copyright {currentYear} All rights reserved{" "}
				</span>
			</footer>
		</>
	);
};
