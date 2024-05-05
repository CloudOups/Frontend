import { Publication } from "../Blog/publication";
import { User } from "../user/user";

export class Comment {
    idcmt?: number;
    contenucm?: string;
    datecm?: Date;
    user?:User;
    publication?: Publication;
    Sentiment?: string;
}
