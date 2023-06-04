
import {MongoArtistRepository} from "./mongoArtistRepository";
import {ArtistService} from "../Application/artistService";
import {ArtistController} from "./artistController";

const mongoArtistRepository = new MongoArtistRepository()

export const artistService = new ArtistService(mongoArtistRepository);
export const artistController = new ArtistController(artistService);