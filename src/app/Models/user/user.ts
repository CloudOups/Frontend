import { ERole } from "./role";

export class User {
    userId?: number;
    email?: string;
    nom?: string;
    prenom?: string;
    mdp?: string;
    role?: ERole;
    registrationDate?: string;
    enabled?: boolean;
    photo?: string;
    constructor(id?: string) {
        if (id) {
            this.userId = parseInt(id); 
        }
       
    }  }
