import { BlogCard } from "@/Components/BlogCard";
import { SearchBar } from "@/Components/SearchBar";
import { blogPageData } from "@/Constants/Data";
import { BlogPageType } from "@/Constants/pageType";
import { useRef, useState } from "react";

export default function Blog(props: any) {
	const { blogCardData } = props;
	const [blogData, setBlogData] = useState(blogCardData);
	const handleChange = (e: any) => {
		let searchData = blogCardData?.filter(
			(ele: any) =>
				ele?.title?.toLowerCase().includes(e.target.value) ||
				ele?.description?.toLowerCase()?.includes(e.target.value)
		);
		setBlogData(searchData);
	};
	return (
		<>
			<div className="px-[15px] pt-[15px] pb-[50px]  md:px-[115px] md:pt-[100px] md:pb-[50px] dark:bg-blac ">
				<h1 className="font-bold text-sm md:text-xl text-[#21243D] dark:text-[#ffffff]">
					Blog
				</h1>
				<div className="flex align-middle justify-center pb-10">
					<SearchBar handleChange={handleChange} />
				</div>
				<div>
					{blogData?.map((ele: any, ind: any) => (
						<BlogCard
							key={ind}
							classes="py-8 border-b-2"
							heading={ele?.title}
							createdAt={ele?.createdAt}
							description={ele?.description}
							tag={ele?.tag}
						/>
					))}
				</div>
			</div>
		</>
	);
}
export async function getStaticProps() {
	// const res = await fetch("http://localhost:3000/api/blog");
	const data = blogPageData;
	return {
		props: {
			pageType: BlogPageType,
			blogCardData: data || [],
		},
	};
}
