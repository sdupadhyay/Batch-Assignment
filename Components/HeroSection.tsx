import Image from "next/image";
import heroSectionImage from "@/public/hero-section-image.png";
export const HeroSection = () => {
	return (
		<>
			<div className="px-[15px] pt-[15px] pb-[50px] flex flex-col-reverse md:px-[115px] md:pt-[100px] md:pb-[50px] md:flex md:flex-row">
				<div className="w-full items-center md:w-2/4 md:items-start flex flex-col gap-6">
					<h1 className="text-sm text-center  text-[#21243D] md:text-left md:text-xl  font-bold dark:text-[#ffffff]">
						Hi, I am John,
						<br /> Creative Technologist
					</h1>
					<p className="text-base font-normal text-[#21243D] dark:text-[#ffffff]">
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet.
					</p>
					<button className="text-white w-fit py-2 px-4 rounded bg-[#FF6464]">
						Download Resume
					</button>
				</div>
				<div className="w-full md:w-2/4 flex justify-center items-center text-right pb-5 md:p-0">
					<div>
						<Image
							src={heroSectionImage}
							alt="Hero Section Image"
							unoptimized
							className="w-[175px] md:w-[250px]"
						/>
					</div>
				</div>
			</div>
		</>
	);
};
