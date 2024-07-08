export class NotificationRequest {
    type: string;
    recipient: string;
    subject: string;
    message: string;
  
    constructor(type: string, recipient: string, subject: string, message: string) {
      this.type = type;
      this.recipient = recipient;
      this.subject = subject;
      this.message = message;
    }
  }
  