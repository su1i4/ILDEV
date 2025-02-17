import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
