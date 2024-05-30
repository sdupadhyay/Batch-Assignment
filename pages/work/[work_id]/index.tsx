import { MetaTitle } from "@/Components/MetaTitle";
import { Tag } from "@/Components/Tag";
import { getWorkDetailPageData, workPageData } from "@/Constants/Data";
import { WorkPageType } from "@/Constants/pageType";
import { GetStaticPaths } from "next";
import Image from "next/image";

export default function WorkDetailPage(props: any) {
	const { workDetailPageData } = props;
	//console.log(workDetailPageData)
	return (
		<>
			<MetaTitle metaTitle={workDetailPageData[0]?.title} />
			<div className="px-[15px] pt-[15px] pb-[50px]  md:px-[135px] md:pt-[130px] md:pb-[50px] dark:bg-blac flex gap-7 flex-col">
				<h1 className="font-bold text-sm md:text-xl text-[#21243D] dark:text-[#ffffff]">
					{workDetailPageData[0]?.heading}
				</h1>
				<div className="flex gap-7">
					<Tag
						year={workDetailPageData[0]?.year}
						backgroundColor={"bg-[#FF7C7C]"}
					/>
					<span className="text-[#8695A4] font-normal">
						{workDetailPageData[0]?.tag}
					</span>
				</div>
				<p className="text-[#21243D] dark:text-[#ffffff]">
					{workDetailPageData[0]?.description}
				</p>
				<Image
					src={workDetailPageData[0]?.image}
					alt={workDetailPageData[0]?.heading}
				/>
			</div>
		</>
	);
}

export const getStaticPaths = (async () => {
	const allWorkData: Array<any> = workPageData;
	const paths = allWorkData?.map((ele) => {
		return {
			params: {
				work_id: ele?.id.toString(),
			},
		};
	});
	return {
		paths,
		fallback: false,
	};
}) satisfies GetStaticPaths;

export async function getStaticProps(context: any) {
	const data = getWorkDetailPageData(context.params.work_id);
	//console.log(data);
	return {
		props: {
			pageType: WorkPageType,
			workDetailPageData: data || [],
		},
	};
}
