import { Props } from "@/common";
import HomePage from "@/screens/main";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return <HomePage />;
}
