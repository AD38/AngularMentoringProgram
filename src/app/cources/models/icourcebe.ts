import { IAuthor } from './iaouthor';

export interface ICourceBE {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    isTopRated: boolean;
    authors: IAuthor[];
}
