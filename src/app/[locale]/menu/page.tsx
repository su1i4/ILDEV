import { Props } from "@/common";
import Menu from "@/screens/menu";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function MenuPage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return <Menu />;
}
