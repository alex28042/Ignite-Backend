import {MongoOrganizationRepository} from "../infrastructure/mongoOrganizationRepository";
import {User} from "../domain/user";
import {Organization} from "../domain/organization";

export class OrganizationService {
    constructor(readonly organizationRepository: MongoOrganizationRepository) {}

    async create(organization: Organization) {
        if (!organization.email || !organization.password || !organization.name) {
            throw new Error("Error passing email");
        }

        const organizationCreated = await this.organizationRepository.create(organization);

        if (!organizationCreated) {
            throw new Error("Error creating user");
        }

        return organizationCreated;
    }

    async getOrganizationById(organizationId: string) {
        if (!organizationId) {
            throw new Error("Error passing ID");
        }

        const getOrganization = await this.organizationRepository.getOrganizationById(organizationId);

        if (!getOrganization) {
            throw new Error("Error creating user");
        }

        return getOrganization;
    }
}