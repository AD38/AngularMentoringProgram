import { IAuthor } from './iaouthor';

export interface ICource {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    isTopRated: boolean;
    authors: IAuthor[];
}
