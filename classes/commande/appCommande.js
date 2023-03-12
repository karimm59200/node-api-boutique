import { Commande } from "../commande/commande.js";


export class AppCommande{
    constructor(){
        this.commandes=[]
        this.fichier="data.json"

    }

    read(){
        const contenu = readFileSync(this.fichier).toString()
        this.commandes = JSON.parse(contenu)
        this.count = (this.clients[this.commandes.length-1] != undefined) ? this.clients[this.commandes.length-1].id : 0
    }
    
    write(){
        writeFileSync(this.fichier, JSON.stringify(this.clients))
    }


    //ajouter une commande
    ajouterCommande(id,client,produits ){
        let commandeTest = new Commande(id,client,produits)
        this.commandes.push(commandeTest)
    }

    //recuperer une commande
    getCommande(id){
        return this.commandes.find(c => c.id == id)
    }

     // recupere tous les commandes
     getAllCommandes(){
        return this.commandes
    }
}