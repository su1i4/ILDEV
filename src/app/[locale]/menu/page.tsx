import { Props } from "@/common";
import Menu from "@/screens/menu";
import { unstable_setRequestLocale } from "next-intl/server";

export default function MenuPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return <Menu />;
}
