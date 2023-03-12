import { Produit } from "../produit/produit.js";
 import {readFileSync, writeFileSync} from "fs"

export class AppProduit{
    constructor(){
        this.produits= []
        this.fichier = "dataProduit.json"
    }

    read(){
        const contenu = readFileSync(this.fichier).toString()
        this.produits = JSON.parse(contenu)
        this.count = (this.produits[this.produits.length-1] != undefined) ? this.produits[this.produits.length-1].id : 0
    }

    write(){
        writeFileSync(this.fichier, JSON.stringify(this.produits))
    }

    //ajouter produit 

    ajouterProduit(titre,prix, quantite ){
        // console.log(titre, prix)
        this.read()
        const prod = new Produit(++this.count,titre,prix, quantite)
        console.log(prod)
        this.produits.push(prod)
        this.write()
    }

    //recuperer un produit
    getProduit(id){
        return this.produits.find(p => p.id == id)
    }

    //recuperer tous les produits
    getAllProduits(){
        this.read()
        return this.produits
    }



}