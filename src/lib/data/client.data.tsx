import {
  AphaCargoIcon,
  BrandFabricaIcon,
  OnlyWorkIcon,
  PrestigeIcon,
} from "@/assets/icons/clients";

export interface IClient {
  icon: React.ReactNode;
  url: string;
  name: string;
}

export const CLIENTS: IClient[] = [
  {
    icon: <AphaCargoIcon />,
    url: "https://alpha-cargo.kg",
    name: "Alpha Cargo",
  },
  {
    icon: <PrestigeIcon />,
    url: "https://prestigetower.kg",
    name: "Prestige",
  },
  {
    icon: <OnlyWorkIcon />,
    url: "https://onlywork.kg",
    name: "Only Work",
  },
  {
    icon: <BrandFabricaIcon />,
    url: "https://brandfabrica.kg",
    name: "Brand Fabrica",
  },
];