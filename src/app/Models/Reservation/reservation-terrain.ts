import { Tournoi } from "src/app/Models/Tournoi/tournoi";
import { Terrain } from "../Terrain/terrain";
import { TypeReservation } from "./typeReservation";

export class ReservationTerrain {
  numRes!: number;
  dateDebut!: Date;
  dateFin!: Date;
  prixReser!: number;
  etatReser!:true
  typeRes!: TypeReservation;
  //user!: User;
  terrain!: Terrain;
  tournoi!: Tournoi;
}

