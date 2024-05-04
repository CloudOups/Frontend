import { ReservationTerrain } from "../Reservation/reservation-terrain";

export class Terrain {
numTerrain!: number;
  nomTerrain!: string;
  typeTerrain!: TypeTerrain;
  reservations!: ReservationTerrain[];
  statusTerrain?: StatusTerrain;
  imageTerrain?: string;


}

export enum StatusTerrain {
  Reserve = 'Reserve',
  Libre = 'Libre'
}

export enum TypeTerrain {
    Football = 'Football',
    Basketball = 'Basketball',
    Handball = 'Handball'
  }
  