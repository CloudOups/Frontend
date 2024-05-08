import { Tournoi } from "../Tournoi/tournoi";
import { User } from "../user/user";

export class Equipe {
    numequipe?: number;
    nomEquipe?: string;
    classement?: number;
    nbMemEquipe?: number;
    chefEquipe?: User;
    tournoi?: Tournoi;
    membresEquipe?: User[];
    membresEnAttente?: User[];
}
