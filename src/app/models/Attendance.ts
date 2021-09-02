import { User } from "../User";

export class Attendance {
    id: number;
    user: User;
    classId : number;
    subject: string;
    totalClass: number;
    attendedClass: number;
}
