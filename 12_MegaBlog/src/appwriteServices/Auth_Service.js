import conf from '../conf/conf';
import { Client, Account, ID } from 'appwrite';
//! NOTE: PLEASE REFER APP_WRITE DOCUMENTATION TO UNDERSTAND THE CONNECTION

//! defining class: AuthService
export class AuthService {
  //* below are the logic to connect with the database and backend template
  client = new Client();

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) //your api end point
      .setProject(conf.appwriteProjectId); // your project id

    this.account = new Account(this.client);
  }

  //! defining methods inside class hence we can call them using class name whenever there is a need.

  //* signup
  async createAccount({ email, password, name }) {
    try {
      console.log(this);
      console.log(this.account);
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        console.log(userAccount);
        //call another method: calling login
        this.login({ email, password });
      } else {
        console.log(
          'no user account found. hence cannot sent forward to generate session'
        );
        return userAccount;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //* login
  async login({ email, password }) {
    try {
      console.log(typeof(email), password);
      let emailSession = await this.account.createEmailPasswordSession(
        email,
        password
      );
      console.log(emailSession);
      return emailSession;
    } catch (error) {
      console.log(error);
    }
  }

  //* To get the details of current user's account
  async getCurrentUser() {
    try {
      console.log(this.account.client);
      return await this.account.get();
    } catch (error) {
      console.log(`AppwriteService:: getCurrentUser :: error `, error);
    }
    return null;
  }

  //* logout
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log(`AppwriteService:: logout:: error `, error);
    }
  }
}

// creating an instance from classAuthService constructor
const auth_service = new AuthService();

export default auth_service;
