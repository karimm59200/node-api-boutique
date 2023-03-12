import { Commande } from "../commande/commande.js";
import {readFileSync, writeFileSync} from "fs"


export class AppCommande{
    constructor(){
        this.commandes=[]
        this.fichier="dataCommande.json"

    }

    read(){
        const contenu = readFileSync(this.fichier).toString()
        this.commandes = JSON.parse(contenu)
        this.count = (this.commandes[this.commandes.length-1] != undefined) ? this.commandes[this.commandes.length-1].id : 0
    }
    
    write(){
        writeFileSync(this.fichier, JSON.stringify(this.commandes))
    }


    //ajouter une commande
    ajouterCommande(client,produits ){
        this.read()
        let commandeTest = new Commande(++this.count,client,produits)
        this.commandes.push(commandeTest)
        this.write()
    }

    //recuperer une commande
    getCommande(id){
        this.read()
        return this.commandes.find(c => c.id == id)
        this.write()
    }

     // recupere tous les commandes
     getAllCommandes(){
        this.read()
        return this.commandes
         this.write()
    }
}