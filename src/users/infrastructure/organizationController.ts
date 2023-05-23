import {OrganizationService} from "../application/organizationService";
import {Request, Response} from "express";
import {Organization} from "../domain/organization";
import {UserRole} from "../domain/userRole";

export class OrganizationController {
    constructor(readonly organizationService: OrganizationService) {}

    async create(req: Request, res: Response){
        const organization = new Organization(req.body.email, req.body.password, req.body.name, UserRole.ORGANIZATION);

        const organizationInserted =  await this.organizationService.create(organization);

        res.status(200).send({status: "OK", message: { organizationInserted, ...organization }})
    }

    async getOrganizationById(req: Request, res: Response){
        const organizationId = req.params.id

        const organization = await this.organizationService.getOrganizationById(organizationId);

        res.status(200).send({status: "OK", message: { ...organization }})
    }
}