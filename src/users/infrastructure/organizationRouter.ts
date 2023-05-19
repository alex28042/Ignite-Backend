import express from "express";
import {OrganizationController} from "./organizationController";
import {organizationController} from "./dependencies";


const organizationRouter = express.Router()

organizationRouter
    .get("/getOrganizationById", organizationController.getOrganizationById.bind(organizationController))
    .post("/", organizationController.create.bind(organizationController))

export { organizationRouter }