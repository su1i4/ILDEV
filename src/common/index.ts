import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export interface IService {
  name: string;
  image: any;
}

export interface IRoutes {
  link: string;
  name: string;
}

export interface Tech {
  title: string;
  icons?: (string | StaticImport)[];
  description: string;
}

export interface ProjectData {
  task: {
    year: number;
    description: string;
  };
  result: {
    mainText: string;
    features: string[];
    mainText2: string;
  };
  technicalDetails: {
    title: string;
    features: string[];
    title2: string;
  };
}

export interface AppScreenshot {
  id: number;
  title: string;
  images: { className?: string; image: string | StaticImageData }[];
}

export interface PlatformData {
  id: string;
  title: string;
  description: string;
  conditional: string[];
  pending: string[];
  tasks?: string[];
}

export type Props = {
  params: Promise<{ locale: string }>;
};
