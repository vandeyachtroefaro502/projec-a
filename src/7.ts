  export class User {
    private userName: string;
    private userAge: number;
    constructor(userName: string, userAge: number) {
      this.userName = userName;
      this.userAge = userAge;
    }
  
    getUserName(): string {
      return this.userName;
    }
  
    getUserAge(): number {
      return this.userAge;
    }
  }