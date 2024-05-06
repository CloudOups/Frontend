import { User } from "../user/user";

export class CodePromo {
    idCodePromo!: number;
    dateExpCodePromo!: Date;
    code!: string;
    user!: User;
    etatCodePromo: boolean = false;
  
}
