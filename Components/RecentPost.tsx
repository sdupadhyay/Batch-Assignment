import { BlogCard } from "./BlogCard";
import { ReactElement } from "react";
type props = {
	blogData: Array<any>;
};
export const RecentPost: React.FC<props> = ({ blogData }): ReactElement => {
	return (
		<div className="bg-[#EDF7FA]">
			<div className="px-[15px] py-[15px] md:px-[115px] md:py-7">
				<div className="flex justify-between pb-4">
					<span className="text-[#21243D] justify-between">Recent Post</span>
					<span className="text-[#00A8CC] hidden md:block">View All</span>
				</div>
				<div className="flex flex-col md:flex-row gap-5">
					{blogData?.map((ele, ind) => (
						<div className="md:w-4/12" key={ind}>
							<BlogCard
								classes="p-5"
								heading={ele?.title}
								createdAt={ele?.createdAt}
								description={ele?.description}
								tag={ele?.tag}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
