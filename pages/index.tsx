import { FeaturedWorkCard } from "@/Components/FeaturedWorkCard";
import { HeroSection } from "@/Components/HeroSection";
import { MetaTitle } from "@/Components/MetaTitle";
import { RecentPost } from "@/Components/RecentPost";
import { homePageData } from "@/Constants/Data";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
	const { recentPostData, featureWorkData } = props;
	return (
		<main>
			<MetaTitle metaTitle="Home Page" />
			<HeroSection />
			<RecentPost blogData={recentPostData} />
			<div className="px-[15px] pt-[15px] md:px-[115px] md:py-7">
				<h1 className="text-2xl text-[#21243D]">Featured Work</h1>
				{featureWorkData?.map((ele: any, ind: any) => (
					<FeaturedWorkCard
						key={ind}
						image={ele?.image}
						title={ele?.title}
						tag={ele?.tag}
						description={ele?.description}
						id={ele?.id}
						year={ele?.year}
					/>
				))}
			</div>
		</main>
	);
}
export async function getStaticProps() {
	const data = homePageData;
	return {
		props: {
			recentPostData: data["Recent-Post"] || [],
			featureWorkData: data["Feature-Work"] || [],
		},
	};
}
