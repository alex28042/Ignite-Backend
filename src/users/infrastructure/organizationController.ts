import {OrganizationService} from "../application/organizationService";
import {Response, Request} from "express";
import {Organization} from "../domain/organization";

export class OrganizationController {
    constructor(readonly organizationService: OrganizationService) {}

    async create(req: Request, res: Response){
        const organization = new Organization(req.body.email, req.body.password, req.body.name);

        const organizationInserted =  await this.organizationService.create(organization);

        res.status(200).send({status: "OK", message: { organizationInserted, ...organization }})
    }

    async getOrganizationById(req: Request, res: Response){
        const organizationId = req.params.id

        const organization = await this.organizationService.getOrganizationById(organizationId);

        res.status(200).send({status: "OK", message: { ...organization }})
    }
}