import { Ticket } from "../Ticket/ticket";
import { Tournoi } from "../Tournoi/tournoi";

export class Event {
    numevent!: number;
    nomevent!: string;
    categorie!: string;
    location!: string;
    dateDebut!: Date;
    dateFin!: Date;
    image!: string;
    nbParticipants!: number;
    tickets!: Ticket[];
    tournois!: Tournoi[];
}
