import { ReactElement } from "react";
import vibrantPortairs from "@/public/vibrant-portraits.png";
import Image from "next/image";
import { Tag } from "./Tag";
import Link from "next/link";
type props = {
	image: string;
	title: string;
	tag: string;
	description: string;
	id: Number;
};
export const FeaturedWorkCard: React.FC<props> = ({
	image,
	title,
	tag,
	description,
	id,
}): ReactElement => {
	return (
		<Link href={`/work/${id}`}>
			<div className="flex cursor-pointer flex-col md:flex-row gap-4 border-b pb-10 pt-10  items-center hover:shadow-lg hover:translate-y-1">
				<div className="w-full md:w-1/5">
					<div>
						<Image
							alt={title}
							src={image}
							className=" w-[100%] h-[220px] md:w-[240px] md:h-[180px]"
						/>
					</div>
				</div>
				<div className="w-4/5 flex flex-col gap-5">
					<h2 className="text-2xl md:text-3xl text-[#21243D] dark:text-[#ffffff]">
						{title}
					</h2>
					<div className="flex gap-7">
						<Tag />
						<span className="text-[#8695A4] font-normal">{tag}</span>
					</div>
					<p className="text-[#21243D] dark:text-[#ffffff]">{description}</p>
				</div>
			</div>
		</Link>
	);
};
