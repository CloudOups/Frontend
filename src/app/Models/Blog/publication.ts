import { User } from "../user/user";

export class Publication {
    numPub?: number;
    sujet?: string;
    contenu?: string;
    dateCreation?: Date;
    photo?: string;
    status?: boolean;
    likes?: number;
    user_id?: number; // Ensure that this matches the user data structure you expect
}
