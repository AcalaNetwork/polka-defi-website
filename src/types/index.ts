import { PropsWithChildren } from "react";

export interface Project {
    name: string
    logo: string
    tvl?: number
    dapp?: string
    demo?: string
    category: string
}

export type ProjectList = Project[]

export interface BasicProps extends PropsWithChildren<unknown> {
    className?: string;
}