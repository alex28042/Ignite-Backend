import {Artist} from "./artist";

export interface ArtistRepository {
    getArtistById(artistId: string): Promise<Artist | null>;
    getArtistByName(artistName: string): Promise<Artist | null>;
    createArtist(artist: Artist): Promise<string | null>;
};