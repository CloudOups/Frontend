import { User } from "../user/user";

export class Publication {
    id?: any;
    Sujet?: string;
    contenu?: string;
    dateCreation?: Date;
    photo?: string;
    user?: User;
    status?: boolean;


}
