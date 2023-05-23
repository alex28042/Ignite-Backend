import {NextFunction, Response, Request} from "express";
import {UserRole} from "../../users/domain/userRole";

export class OrganizationMiddleware {
    isOrganization(req: Request, res: Response, next: NextFunction) {
        if (req.body.user.role != UserRole.ORGANIZATION) {
            res.status(403).send({status: "FAILED", message:"Error auth"});
        }

        next();
    }
}