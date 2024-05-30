import React, { ReactElement } from "react";

interface props {
	classes: string;
	heading: string;
	createdAt: string;
	tag: string;
	description: string;
}
export const BlogCard: React.FC<props> = ({
	classes,
	heading,
	createdAt,
	tag,
	description,
}): ReactElement => {
	return (
		<>
			<div
				className={`bg-[#FFFFFF] dark:bg-[#3d3d3d]  rounded flex flex-col gap-4 ${classes}`}
			>
				<h2 className="text-blogcardHeading text-[#21243D] dark:text-[#ffffff] font-bold">
					{heading}
				</h2>
				<div className="flex">
					<div className="pr-9 text-[#21243D] dark:text-[#ffffff] text-lg">
						{createdAt}
					</div>
					<span className="border border-black"></span>
					<span className="pl-7 text-[#21243D] dark:text-[#ffffff] text-lg">
						{tag}
					</span>
				</div>
				<p className="text-[#21243D] dark:text-[#ffffff] text-base">
					{description}
				</p>
			</div>
		</>
	);
};
