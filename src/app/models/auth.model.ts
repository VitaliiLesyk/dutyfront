export class AuthModel {
  private status: boolean;
  private token: string;

  constructor(status:boolean, token:string){
    this.status = status;
    this.token = token;
  }

  public setStatus(status:boolean):void{
    this.status = status;
  }

  public getStatus():boolean{
    return this.status;
  }

  public setToken(token:string):void{
    this.token = token;
  }

  public getToken():string{
    return this.token;
  }
}
