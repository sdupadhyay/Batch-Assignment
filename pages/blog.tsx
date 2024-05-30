import { BlogCard } from "@/Components/BlogCard";
import { MetaTitle } from "@/Components/MetaTitle";
import { SearchBar } from "@/Components/SearchBar";
import { blogPageData } from "@/Constants/Data";
import { BlogPageType } from "@/Constants/pageType";
import { useEffect, useRef, useState } from "react";

export default function Blog(props: any) {
	const { blogCardData } = props;
	const getData = () => {
		return blogCardData;
	};
	const [blogData, setBlogData] = useState(blogCardData);
	const handleChange = (e: any) => {
		let searchData = blogCardData?.filter(
			(ele: any) =>
				ele?.title?.toLowerCase().includes(e.target.value?.toLowerCase()) ||
				ele?.description?.toLowerCase()?.includes(e.target.value?.toLowerCase())
		);
		setBlogData(searchData);
	};
	useEffect(() => {
		const onScroll = () => {
			// console.log(window.document.body.offsetHeight);
			//console.log(window.scrollY);
			//console.log(window.innerHeight);
			if (blogData?.length > 50) return;
			if (
				window.innerHeight + window.scrollY >=
				window.document.body.offsetHeight - 20
			) {
				//console.log("Triggerd");
				setBlogData([...blogData, ...blogCardData]);
			}
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [blogData]);
	return (
		<>
			<MetaTitle metaTitle="Blog Page" />
			<div className="px-[15px] pt-[15px] pb-[50px]  md:px-[115px] md:pt-[100px] md:pb-[50px] dark:bg-blac ">
				<h1 className="font-bold text-sm md:text-xl text-[#21243D] dark:text-[#ffffff]">
					Blog
				</h1>
				<div className="flex align-middle justify-center py-10">
					<SearchBar handleChange={handleChange} />
				</div>
				<div>
					{blogData?.length ? (
						blogData?.map((ele: any, ind: any) => (
							<BlogCard
								key={ind}
								classes="py-8 border-b-2"
								heading={ele?.title}
								createdAt={ele?.createdAt}
								description={ele?.description}
								tag={ele?.tag}
							/>
						))
					) : (
						<h3 className="font-bold text-2xl text-[#21243D] dark:text-[#ffffff]">
							Sorry, No Record Found
						</h3>
					)}
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
