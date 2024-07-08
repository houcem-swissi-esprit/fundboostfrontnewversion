import { Campaign } from "./campaign";
import { User } from "./user";

export class Donation {
    id: number;
    campaign: Campaign;
    donator: User;
    amount: number;
  
    constructor(
      id: number,
      campaign: Campaign,
      donator: User,
      amount: number
    ) {
      this.id = id;
      this.campaign = campaign;
      this.donator = donator;
      this.amount = amount;
    }
}