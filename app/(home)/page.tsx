import Image from "next/image";

export default function HomePage() {
	return (
		<div>
			<Image src={"/logo.svg"} width={50} height={50} alt="logo" />
			<p className="text-xl font-semibold tracking-tight">MyTube</p>
		</div>
	);
}
