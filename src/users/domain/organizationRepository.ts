import {Organization} from "./organization";

export interface OrganizationRepository {
    create(organization: Organization): Promise<string | null>;
    getOrganizationById(organizationId: string): Promise<Organization | null>;
}