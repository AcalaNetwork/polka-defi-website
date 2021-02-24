import { PropsWithChildren } from 'react';

export interface Project {
  name: string;
  logo: string;
  tvl?: number;
  dapp?: string;
  demo?: string;
  category: string;
}

export type ProjectList = Project[];

export interface Group {
  name: string;
  type: string;
  website: string;
  repository: string;
}

export type WorkingGroup = Group[];

export interface BasicProps extends PropsWithChildren<unknown> {
  className?: string;
}
