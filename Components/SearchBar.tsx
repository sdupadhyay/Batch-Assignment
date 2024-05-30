import { ReactElement } from "react";
type props = {
	handleChange: CallableFunction;
};
export const SearchBar: React.FC<props> = ({ handleChange }): ReactElement => {
	return (
		<div className="relative">
			<input
				type="text"
				placeholder="Search Blog...."
				className="w-full rounded-md border py-2.5 px-3 pe-10 shadow-sm sm:text-sm"
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
};
