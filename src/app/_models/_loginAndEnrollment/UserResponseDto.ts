import { AddressDto } from "../_common/addressDto";
import { RoleDto } from "../_common/roleDto";

export class UserResponseDto {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    registerDatetime: string;
    lastLoginDatetime: string;
    birthDate: string;
    gender: string;
    address: AddressDto;
    role: RoleDto;
    tutorAgentId: string;
    status: string;
}