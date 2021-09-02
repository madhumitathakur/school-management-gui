import { ClassDetail } from "./models/ClassDetail";

export class User {
    firstname?: string;
    lastname?: string;
    registrationId?: number;
    password: string;
    email: string;
    phone?: number;
    address?: string;
    isAdmin?: boolean;
    classDetails?: ClassDetail; 
}
