import { Produit } from "../produit/produit.js";
// import {readFileSync, writeFileSync} from "fs"

export class AppProduit{
    constructor(){
        this.produits= []
        this.count = 10
        this.fichier = "data.json"
    }

    // read(){
    //     const contenu = readFileSync(this.fichier).toString()
    //     this.produits = JSON.parse(contenu)
    //     this.count = (this.produits[this.produits.length-1] != undefined) ? this.produits[this.produits.length-1].id : 0
    // }

    // write(){
    //     writeFileSync(this.file, JSON.stringify(this.produits))
    // }

    //ajouter produit 

    ajouterProduit(id,titre,prix){
        const produit = new Produit(++this.count,titre,prix)
        this.produits.push(produit)
        // this.write()
    }

    //recuperer un produit
    getProduit(id){
        return this.produits.find(p => p.id == id)
    }

    //recuperer tous les produits
    getAllProduits(){
        return this.produits
    }



}