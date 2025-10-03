import { useEffect } from "react";

const isGamer = import.meta.env.VITE_PORTFOLIO === "gamer";

export default function App() {
	useEffect(() => {
		const favicon = document.querySelector("link[rel='icon']");

		if (isGamer) {
			document.title = "cheesypotato";
			favicon?.setAttribute("href", "/cheesypotato.ico");
		} else {
			document.title = "julie saia";
			favicon?.setAttribute("href", "/juliesaia.ico");
		}
	}, []);

	return (
		<div className="h-screen w-screen bg-gray-500 flex flex-col justify-center items-center text-center gap-4 text-gray-200 font-mono">
			<h1 className="text-4xl font-bold">
				{isGamer ? "cheesypotato" : "julie saia"}
			</h1>
			<div className="text-sm">
				<p>
					{isGamer
						? "fighting game player of rivals of aether 2 circumstance"
						: "software engineer of typescript circumstance"}
				</p>
			</div>
			<div className="text-sm flex gap-4 [&_a]:hover:underline">
				{isGamer ? (
					<>
						<a href="https://twitter.com/cheesiestpotato">twitter</a>
						<a href="https://sleet.gg">sleet</a>
					</>
				) : (
					<>
						<a href="https://github.com/juliesaia">github</a>
						<a href="https://linkedin.com/in/juliesaia">linkedin</a>
					</>
				)}
			</div>
			<a
				className="cursor-pointer"
				href={isGamer ? "https://juliesaia.com" : "https://cheesypota.to"}
			>
				{isGamer ? "💻" : "🎮"}
			</a>
		</div>
	);
}
