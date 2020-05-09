import { PrivilegeDto } from "./privilegeDto";

export class RoleDto {
    id:string;
    roleName: string;
    roleDesc: string;
    privileges: PrivilegeDto[];
}