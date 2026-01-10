import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export default function HomeNavbar() {
	return (
		<nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
			<div className="flex items-center gap-4 w-full">
				{/* Menu and logo */}
				<div className="flex items-center shrink-0">
					<SidebarTrigger />
					<Link href="/">
						<div className="p-4 flex items-center gap-1">
							<Image src="./logo.svg" alt="MyTube" width={32} height={32} />
							<p className="text-xl font-semibold tracking-tight">MyTube</p>
						</div>
					</Link>
				</div>
				{/* search input */}
				<div className="flex-1 flex justify-center max-w-180 mx-auto">
					<SearchInput />
				</div>

				{/* auth button */}
				<div className="shrink-0 flex items-center gap04">
					<AuthButton />
				</div>
			</div>
		</nav>
	);
}
