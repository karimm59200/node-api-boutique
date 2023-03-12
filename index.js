import express from "express"
import { AppClient } from "./classes/client/appClient.js"
import {AppCommande} from "./classes/commande/appCommande.js"
import { AppProduit } from "./classes/produit/appProduit.js"

const app = express()

const appClient = new AppClient()
const appProduit = new AppProduit()
const appCommande = new AppCommande()


app.use(express.json())


app.post('/client',(req,res) => {
    const {id,nom, prenom, telephone} = req.body
    appClient.ajouterClient(id,nom, prenom, telephone)
    res.json({message : "client ajouté"})
})

app.get('/client',(req,res) => {
    res.json(appClient.clients)
})

app.get('/client/:id',(req,res) => {
    const client = appClient.getClient(req.params.id)
    if(client != undefined) {
        res.json(client)
    }else {
        res.json({message : "aucun client avec cet id"})
    }
})




app.post('/produit',(req,res) => {
    const {titre,prix, quantite} = req.body
    appProduit.ajouterProduit(titre,prix,quantite)
    res.json({message : "produit ajouté"})
})

app.get('/produits',(req,res)=>{
    res.json(appProduit.getAllProduits())
})

app.get('/produit/:id',(req,res)=>{
    const produit = appProduit.getProduit(req.params.id)
    if(produit != undefined){
        res.json(client)
    } else {
        res.json({message: "aucun produit avec cet id"})
    }
})


app.post('/commande',(req,res) => {
    
    const {client,produits} = req.body
    // console.log(client, produits)
    appCommande.ajouterCommande(client,produits)
    console.log(client,produits)
    res.json({message : "commande ajoutée"})
})

app.get('/commande',(req,res) =>{
    res.json(appCommande.getAllCommandes())
})

app.get('/commande/:id',(req,res)=>{
    const commande = appCommande.getCommande(req.params.id)
    console.log(commande)
    if(commande != undefined){
        res.json()
    } else {
        res.json( { message: "aucune commande avec cet id"})
    }
})


app.listen(3000, () => {
    // data.lire()
    console.log("go")
})
