import { ReactElement } from "react";
type props = {
	metaTitle: string;
};
export const MetaTitle: React.FC<props> = ({ metaTitle }): ReactElement => {
	return (
		<head>
			<title>{metaTitle}</title>
		</head>
	);
};
