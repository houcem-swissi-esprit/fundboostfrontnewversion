import { User } from './user';
import { Investment } from './investment';
import { Donation } from './donation';
import { CampaignStatus } from './campaign-status';
import { FundingType } from './funding-type';

export class Campaign {
  id: number;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  startDate: Date;
  endDate: Date;
  status: CampaignStatus;
  fundingType: FundingType;
  creator: User;
  investments?: Set<Investment>;
  donations?: Set<Donation>;

  /*constructor(
    id: number,
    title: string,
    description: string,
    targetAmount: number,
    currentAmount: number,
    startDate: Date,
    endDate: Date,
    status: CampaignStatus,
    fundingType: FundingType,
    creator: User,
    investments: Set<Investment>,
    donations: Set<Donation>
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.targetAmount = targetAmount;
    this.currentAmount = currentAmount;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
    this.fundingType = fundingType;
    this.creator = creator;
    this.investments = investments;
    this.donations = donations;
  }*/
}

export { FundingType, CampaignStatus };
