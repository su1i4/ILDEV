export const links = {
  home: "/",
  projects: "/projects",
  contacts: "/contacts",
  vacancies: "/vacancies",
  blog: "/blog",
};

export const MARQUEE_TEXT = (t: any) => {
  return [
    t("home.marquee.item1"),
    t("home.marquee.item2"),
    t("home.marquee.item3"),
    t("home.marquee.item4"),
    t("home.marquee.item5"),
    t("home.marquee.item6"),
    t("home.marquee.item7"),
    t("home.marquee.item8"),
    t("home.marquee.item9"),
    t("home.marquee.item10"),
  ];
};

export const ROUTES = (t: any) => {
  return [
    {
      link: links.projects,
      name: t("layout.nav.projects"),
    },
    {
      link: links.blog,
      name: t("layout.nav.blog"),
    },
    {
      link: links.contacts,
      name: t("layout.nav.contacts"),
    },
    {
      link: links.vacancies,
      name: t("layout.nav.vacancy"),
    },
  ];
};
