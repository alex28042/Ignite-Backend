import {ArtistRepository} from "../Domain/artistRepository";
import {Artist} from "../Domain/artist";
import {db} from "../../config/infrastructure/mongo";
import {ObjectId} from "mongodb";

export class MongoArtistRepository implements ArtistRepository{


    async getArtistById(artistId: string): Promise<Artist | null> {
        const getArtist = await db.collection<Artist>("artists").findOne({_id: new ObjectId(artistId)})

        if (!getArtist) {
            return null
        }

        return getArtist;
    }

    async getArtistByName(artistName: string): Promise<Artist | null> {
        const getArtist = await db.collection<Artist>("artists").findOne({name: artistName})

        if (!getArtist) {
            return null
        }

        return getArtist;
    }

    async createArtist(artist: Artist): Promise<string | null> {
        const artistInserted = await db.collection<Artist>("artists").insertOne(artist);

        if (!artistInserted) {
            return null;
        }

        return artistInserted.insertedId.toString();
    }
}