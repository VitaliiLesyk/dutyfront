import * as jwt from 'jsonwebtoken';

export class AdminChecker{
  public static isAdmin(token:string):boolean {
      let decoded = jwt.decode(token);
      let decToStr = JSON.stringify(decoded);
      let decToJSON = JSON.parse(decToStr);
      let tokenRole = decToJSON['role'];
      return tokenRole === 'admin';
  }
}
