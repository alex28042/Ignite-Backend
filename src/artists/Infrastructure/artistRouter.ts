import express from "express";
import {artistController} from "./dependencies";

const artistRouter = express.Router()

artistRouter
    .get("/getArtistById/:id", artistController.getArtistById.bind(artistController))
    .get("/getArtistById/:id", artistController.getArtistByName.bind(artistController))
    .post("/getArtistById/:id", artistController.createArtist.bind(artistController))

export { artistRouter }