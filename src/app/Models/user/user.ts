import { ERole } from "./role";

export class User {
    id?: number;
    email?: string;
    nom?: string;
    lastname?: string;
    password?: string;
    role?: [ERole];
    registrationDate?: string;
    enabled?: boolean;
    imageName?: string;

}
