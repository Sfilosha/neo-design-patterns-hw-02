import { User } from "./models/User";
import { EmailNotification } from "./services/EmailNotification";
import { Logger } from "./services/Logger";
import { NotificationService } from "./services/NotificationService";
import { PushNotification } from "./services/PushNotification";
import { SMSNotification } from "./services/SMSNotification";

const user = new User("example@email.com", "+380123456789", "device-token-abc");

const logger = new Logger();
const email = new EmailNotification(logger);
const push = new PushNotification(logger);
const sms = new SMSNotification(logger);

const notificationService = new NotificationService([email, push, sms]);

notificationService.notify(user, "Ваш платіж оброблено успішно!");
