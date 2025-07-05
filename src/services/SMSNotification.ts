import { ILogger, INotification } from "../core/interfaces";
import { User } from "../models/User";

export class SMSNotification implements INotification {
  constructor(private logger: ILogger) {}

  send(user: User, message: string): void {
    this.logger.log(`Sending SMS to ${user.phone}`);
    console.log(`SMS sent to ${user.phone}: ${message}`);
  }
}
