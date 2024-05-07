import { Equipe } from "../Equipe/equipe";
import { ReservationTerrain } from "../Reservation/reservation-terrain";
import { Terrain } from "src/app/Models/Terrain/terrain";
import { TypeTerrain } from "../Terrain/typeTerrain";

export class Tournoi {
  numTournoi?: number;
  nomTournoi!: string;
  dateDebut!: Date|string;
  dateFin!: Date|string;
  nbEquipes?: number;
  recompense!: string;
  typeTournoi!: TypeTerrain;
  equipes!: Equipe[];
  reservation!: ReservationTerrain;
  event!: Event;
  terrain!: Terrain;
}
