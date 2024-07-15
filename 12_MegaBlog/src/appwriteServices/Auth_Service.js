import conf from '../conf/conf';

import { Client, Account, ID } from 'appwrite';
//! defining class: AuthService
export class AuthService {
  //* below are the logic to connect with the database and backend template
  client = new Client();

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  //! defining methods inside class hence we can call them using class name whenever there is a need.

  //* signup
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //call another method: calling login
        this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //* login
  async login({ email, password }) {
    await this.account.createEmailSession(email, password);
  }

  //* To get the details of current user's account
  async getCurrentUser() {
    try {
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
