import { ReactNode } from "react"

export interface IService {
    name: string
    icons: IServiceIconElement[]
}

export interface IServiceIconElement {
    component: ReactNode,
    classNames: string
}