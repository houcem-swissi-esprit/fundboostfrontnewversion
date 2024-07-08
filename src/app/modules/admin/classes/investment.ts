import { Campaign } from "./campaign";
import { User } from "./user";

export class Investment {
    id: number;
    campaign: Campaign;
    investor: User;
    amount: number;
    sharePercentage: number;
  
    constructor(
      id: number,
      campaign: Campaign,
      investor: User,
      amount: number,
      sharePercentage: number
    ) {
      this.id = id;
      this.campaign = campaign;
      this.investor = investor;
      this.amount = amount;
      this.sharePercentage = sharePercentage;
    }
  }
