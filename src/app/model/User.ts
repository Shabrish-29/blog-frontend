export class User
{
  public userId:number ;
  public userName:string;
  public userPassword:string;
  public userEmail:string;
  public dob:Date;
  public about:string;
  public role:string;


  constructor(userId:any,userName:any,userPassword:any,useremail:any, dob:any, about:any, role:any)
  {
    this.userId=userId;
    this.userName=userName;
    this.userEmail=useremail;
    this.userPassword=userPassword;
    this.dob=dob;
    this.about=about;
    this.role=role;
  }
}