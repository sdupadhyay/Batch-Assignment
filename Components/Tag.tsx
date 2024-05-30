import React, { ReactElement } from "react";

interface props {
	year: string;
	backgroundColor: string;
}
export const Tag: React.FC<props> = ({
	year,
	backgroundColor,
}): ReactElement => {
	return (
		<span
			className={`${backgroundColor} w-fit text-white rounded-2xl px-3 font-black`}
		>
			{year}
		</span>
	);
};
