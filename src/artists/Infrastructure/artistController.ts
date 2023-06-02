import {Response, Request} from "express";
import {Artist} from "../Domain/artist";

export class ArtistController {
    constructor() {
    }

    async getArtistById(req: Request, res: Response) {
        const artistId = req.params.id;

        res.status(200).send({status: "OK", data: {artistId}})
    }
    async getArtistByName(req: Request, res: Response) {
        const artistName = req.params.name;

        res.status(200).send({status: "OK", data: {artistName}})
    }
    async createArtist(req: Request, res: Response) {
        const artist = new Artist(req.body.name, req.body.musicsGender, req.body.description);


        res.status(200).send({status: "OK", data: {...artist}})
    }
}