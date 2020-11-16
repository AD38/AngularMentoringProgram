import { ICource } from "./icource";

export class Cource implements ICource {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    isTopRated: boolean;
}