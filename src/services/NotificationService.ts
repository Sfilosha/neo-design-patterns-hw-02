import { INotification } from "../core/interfaces";
import { User } from "../models/User";

export class NotificationService {
  constructor(private channels: INotification[]) {}

  notify(user: User, message: string): void {
    this.channels.forEach((channel) => channel.send(user, message));
  }
}
