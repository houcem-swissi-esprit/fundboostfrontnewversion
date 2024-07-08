import { User } from "./user";

export class FundingTransaction {
    id: number;
    type: string;
    user: User;
    amount: number;
    date: Date;
  
    constructor(
      id: number,
      type: string,
      user: User,
      amount: number,
      date: Date
    ) {
      this.id = id;
      this.type = type;
      this.user = user;
      this.amount = amount;
      this.date = date;
    }
  }
