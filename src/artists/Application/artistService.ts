import {MongoArtistRepository} from "../Infrastructure/mongoArtistRepository";
import {Artist} from "../Domain/artist";

export class ArtistService {
    constructor(private readonly ArtistRepository: MongoArtistRepository) {}

    async getArtistById(artistId: string) {
        return;
    }

    async getArtistByName(artistName: string) {
        return;
    }
    async createArtist(artist: Artist) {
        return;
    }
}