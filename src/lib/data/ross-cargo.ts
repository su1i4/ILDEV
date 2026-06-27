// Картинки замени на реальные скрины Ross Cargo.

import RossCargoIntro1 from "@/assets/images/ross-cargo-intro.png";
import RossCargoIntro2 from "@/assets/images/ross-cargo-intro2.png";

export const ROSS_CARGO_SCREEN = (t: any) => [
  {
    id: 1,
    title: t("ross-cargo.web"),
    images: [{ image: RossCargoIntro1 }],
  },
  {
    id: 2,
    title: t("ross-cargo.web"),
    images: [{ image: RossCargoIntro2 }],
  },
];

export const ROSS_CARGO_DATA = (t: any) => ({
  task: {
    year: 2024,
    description: t("ross-cargo.task.description"),
  },
  result: {
    mainText: t("ross-cargo.result.mainText"),
    mainText2: t("ross-cargo.result.mainText2"),
    features: [
      t("ross-cargo.result.features.list1"),
      t("ross-cargo.result.features.list2"),
      t("ross-cargo.result.features.list3"),
      t("ross-cargo.result.features.list4"),
    ],
  },
  technicalDetails: {
    title: t("ross-cargo.technicalDetails.title"),
    title2: t("ross-cargo.technicalDetails.title2"),
    features: [
      t("ross-cargo.technicalDetails.features.list1"),
      t("ross-cargo.technicalDetails.features.list2"),
      t("ross-cargo.technicalDetails.features.list3"),
      t("ross-cargo.technicalDetails.features.list4"),
      t("ross-cargo.technicalDetails.features.list5"),
    ],
  },
});