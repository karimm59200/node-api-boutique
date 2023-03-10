import { Client } from "./client.js"
import { Produit } from "./produit.js"
import { Commande } from "./commande.js"

export class Data {
    constructor(){
        this.clients = []
        this.produits = []
        this.commandes = []
        this.fichier = "data.json"
    }

    // read(){
    //     const contenu = readFileSync(this.fichier).toString()
    //     this.todos = JSON.parse(contenu)
    //     this.count = (this.todos[this.todos.length-1] != undefined) ? this.todos[this.todos.length-1].id : 0
    // }
    //
    // write(){
    //     writeFileSync(this.fichier, JSON.stringify(this.todos))
    // }

    //ajouter un client
    ajouterClient(id, nom, prenom, telephone){
        let clientTest = new Client(id,nom,prenom,telephone)
        this.clients.push(clientTest)
    }

    //ajouter un produit
    addProduit(id,titre,prix){
        let produitTest = new Produit(id,titre,prix)
        this.produits.push(produitTest)
    }

    //ajouter une commande
    addCommande(id,client,produits ){
        let commandeTest = new Commande(id,client,produits)
        this.commandes.push(commandeTest)
    }
    //recuperer un client
    getClient(id){
        return this.clients.find(c => c.id == id)
    }

    //recuperer un produit
    getProduit(id){
        return this.produits.find(p => p.id == id)
    }
    //recuperer une commande
    getCommande(id){
        return this.commandes.find(c => c.id == id)
    }
    // recupere tous les commandes
    getAllCommandes(){
        return this.commandes
    }

    //recuperer tous les clients
    getAllClients(){
        return this.clients
    }
    //recuperer tous les produits
    getAllProduits(){
        return this.produits
    }


}