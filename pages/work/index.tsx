import { FeaturedWorkCard } from "@/Components/FeaturedWorkCard";
import { workPageData } from "@/Constants/Data";
import { WorkPageType } from "@/Constants/pageType";

export default function Work(props: any) {
	const { workPageData } = props;
	return (
		<>
			<div className="px-[15px] pt-[15px] pb-[50px]  md:px-[115px] md:pt-[100px] md:pb-[50px] ">
				<h1 className="font-bold text-sm md:text-xl text-[#21243D] dark:text-[#ffffff]">
					Work
				</h1>
				<div>
					{workPageData?.map((ele: any, ind: any) => (
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
			</div>
		</>
	);
}
export async function getStaticProps() {
	try {
		const data = workPageData;
		return {
			props: {
				pageType: WorkPageType,
				workPageData: data || [],
			},
		};
	} catch (error) {
		console.log("Work Page Error=>", error);
		return {
			notFound: true,
		};
	}
}
