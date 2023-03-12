import express from "express"
import { AppClient } from "./classes/client/appClient.js"
import { AppCommande } from "./classes/commande/appCommande.js"
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
    const {id,titre,prix} = req.body
    appProduit.ajouterProduit(id,titre,prix)
    res.json({message : "produit ajouté"})
})

app.get('/produits',(req,res)=>{
    res.json(appProduit.getAllProduits)
})

app.get('/produit/:id',(req,res)=>{
    const produit = appProduit.getProduit(req.params.id)
    if(produit != undefined){
        res.json(client)
    } else {
        res.json({message: "aucun produit avec cet id"})
    }
})


app.post('/commandes',(req,res) => {
    const {id,client,produits} = req.body
    data.addCommande(id,client,produits)
    res.json({message : "commande ajoutée"})
})

app.listen(3000, () => {
    // data.lire()
    console.log("go")
})
