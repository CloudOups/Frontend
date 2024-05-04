import { User } from "../user/user";
import { Event } from "../Event/event";

export class Ticket {
    numTicket?: number;
    dateTicket?: Date; 
    user?: User;
    event?: Event;
}
