import { Props } from "@/common";
import HomePage from "@/screens/main";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return <HomePage />;
}
