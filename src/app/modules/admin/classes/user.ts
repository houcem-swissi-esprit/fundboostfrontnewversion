import { Campaign } from "./campaign";
import { Donation } from "./donation";
import { FundingTransaction } from "./funding-transaction";
import { Investment } from "./investment";
import { Role } from "./role";

export class User {
    idUser: number;
    username: string;
    email: string;
    password: string;
    role: Role;
    campaigns?: Campaign[];
    investments?: Investment[];
    donations?: Donation[];
    transactions?: FundingTransaction[];
  
    constructor(
      idUser: number,
      email: string,
      password: string,
      role: Role,
    ) {
      this.idUser = idUser;
      this.email = email;
      this.password = password;
      this.role = role;
    }
  }