import { Client } from "./client.js"
// import {readFileSync, writeFileSync} from "fs"

export class AppClient {
    constructor(){
        this.clients = []
        this.count = 0
        this.fichier = "data.json"
    }

    read(){
        const contenu = readFileSync(this.fichier).toString()
        this.clients = JSON.parse(contenu)
        this.count = (this.clients[this.clients.length-1] != undefined) ? this.clients[this.clients.length-1].id : 0
    }
    
    write(){
        writeFileSync(this.fichier, JSON.stringify(this.clients))
    }

    //ajouter un client
    ajouterClient( id,  nom, prenom, telephone){
        let clientTest = new Client(++this.count, nom,prenom,telephone)
        this.clients.push(clientTest)
        this.write()
    }

   

    
    //recuperer un client
    getClient(id){
        return this.clients.find(c => c.id == id)
    }

    
    //recuperer tous les clients
    getAllClients(){
        return this.clients
    }
    
    
   

    

}