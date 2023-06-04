import {MongoArtistRepository} from "../Infrastructure/mongoArtistRepository";
import {Artist} from "../Domain/artist";

export class ArtistService {
    constructor(private readonly ArtistRepository: MongoArtistRepository) {}

    async getArtistById(artistId: string) {
        const artist = await  this.ArtistRepository.getArtistById(artistId);

        if (!artist) {
            throw new Error("artist not found")
        }

        return artist;
    }

    async getArtistByName(artistName: string) {
        const artist = await this.ArtistRepository.getArtistByName(artistName);

        if (!artist) {
            throw new Error("artist not found")
        }

        return artist;
    }
    async createArtist(artist: Artist) {
        const artistId = await  this.ArtistRepository.createArtist(artist);

        if (!artistId) {
            throw new Error("artist not found")
        }

        return artistId;
    }
}