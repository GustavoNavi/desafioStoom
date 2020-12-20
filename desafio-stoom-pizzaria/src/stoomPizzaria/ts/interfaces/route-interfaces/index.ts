import { Templates } from "../enum/route-enum";

export interface IPage {
    alias: string;
    path: string | undefined;
    template: Templates;
    pageComponent: any;
}