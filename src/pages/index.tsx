import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
	const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

	return (
		<>
			<div className="text-2xl text-red-200">Hello world</div>
		</>
	);
};

export default Home;
