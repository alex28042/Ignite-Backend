import {Response, Request} from "express";
import {Artist} from "../Domain/artist";
import {ArtistService} from "../Application/artistService";

export class ArtistController {
    constructor(private readonly artistService: ArtistService) {}

    async getArtistById(req: Request, res: Response) {
        const artistId = req.params.id as string;

        try {
            const artist = await this.artistService.getArtistById(artistId)

            res.status(200).send({status: "OK", data: {...artist}})
        } catch (e) {
            res.status(500).send({status: "FAILED", error: `artist by ${artistId} not found`})
        }
    }
    async getArtistByName(req: Request, res: Response) {
        const artistName = req.params.name as string;

        const artist = await this.artistService.getArtistByName(artistName)

        res.status(200).send({status: "OK", data: {...artist}})
    }
    async createArtist(req: Request, res: Response) {
        const artist = new Artist(req.body.name, req.body.musicsGender, req.body.description);

        const artistId = await this.artistService.createArtist(artist)

        res.status(200).send({status: "OK", data: {insertedId: artistId, ...artist}})
    }
}