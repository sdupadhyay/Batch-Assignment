// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { workPageData } from "@/Constants/Data";

export default function handler(req, res) {
	res.status(200).json(workPageData);
}
