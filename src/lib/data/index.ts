export const links = {
  home: "/",
  projects: "/projects",
  contacts: "/contacts",
  vacancies: "/vacancies",
  blog: "/blog",
};

export const MARQUEE_TEXT = () => {
  return [
    "ВЕБ-РАЗРАБОТКА",
    "DIGITAL MARKETING",
    "UX/UI ДИЗАЙН",
    "КОНТЕНТ",
    "ВЕБ-ДИЗАЙН",
    "ВЕБ-РАЗРАБОТКА",
    "DIGITAL MARKETING",
    "UX/UI ДИЗАЙН",
    "КОНТЕНТ",
    "ВЕБ-ДИЗАЙН",
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
