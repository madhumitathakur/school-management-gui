import { User } from "../User";

export class FeePayment {
    id: number;
    user: User;
    amountToBePaid : number;
    month: string;
    transactionNumber: number;
    dateOfPayment: number;
    status: string;
}
