import {OrganizationRepository} from "../domain/organizationRepository";
import {Organization} from "../domain/organization";
import {db} from "../../config/infrastructure/mongo";
import {ObjectId} from "mongodb";

export class MongoOrganizationRepository implements OrganizationRepository {
    async create(organization: Organization): Promise<string | null> {
        const organizationExists = await db.collection<Organization>("Organization").findOne({email: organization.email})

        if (organizationExists) {
            return null;
        }

        const organizationInserted = await db.collection<Organization>("Organization").insertOne(organization)

        if (!organizationInserted) {
            return null;
        }

        return organizationInserted.insertedId.toString()
    }

    async getOrganizationById(organizationId: string): Promise<Organization | null> {
        const getOrganization = await db.collection<Organization>("Organization").findOne({_id: new ObjectId(organizationId)})

        if (!getOrganization) {
            return null;
        }

        return new Organization(getOrganization.email, getOrganization.password, getOrganization.name, getOrganization.role);
    }

}