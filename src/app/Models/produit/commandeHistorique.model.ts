
export class HistoriqueCommande {
    id: number;
    numeroSuiviCommande: string;
    prixTotal: number;
    quantiteTotale: number;
    dateCreation: Date;

    constructor(id: number,
                 numeroSuiviCommande: string, 
                 prixTotal: number, 
                 quantiteTotale: number, 
                 dateCreation: Date) {
        this.id = id;
        this.numeroSuiviCommande = numeroSuiviCommande;
        this.prixTotal = prixTotal;
        this.quantiteTotale = quantiteTotale;
        this.dateCreation = dateCreation;
    }
}