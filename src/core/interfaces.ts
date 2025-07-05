import { User } from "../models/User";

export interface INotification {
  send(user: User, message: string): void;
}

export interface ILogger {
  log(message: string): void;
}
