import express from "express"
import {Data} from "./classes/data.js"

const data = new Data()



const app = express()

app.use(express.json())


app.get('/client',(req,res) => {
    res.json(data.clients)
})

app.get('/client/:id',(req,res) => {
    const client = data.getClient(req.params.id)
    if(client != undefined) {
        res.json(client)
    }else {
        res.json({message : "aucun client avec cet id"})
    }
})





app.post('/client',(req,res) => {
    const {id,nom, prenom, telephone} = req.body
    data.ajouterClient(id,nom, prenom, telephone)
    res.json({message : "client ajouté"})
})

app.post('/produit',(req,res) => {
    const {id,titre,prix} = req.body
    data.addProduit(id,titre,prix)
    res.json({message : "produit ajouté"})
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
