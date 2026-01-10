import { HomePageLayout } from "@/modules/home/ui/layout/home-page-layout";

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return <HomePageLayout>{children}</HomePageLayout>;
}
