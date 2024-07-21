import conf from '../conf/conf';
import { Client, Account, ID } from 'appwrite';
//! NOTE: PLEASE REFER APP_WRITE DOCUMENTATION TO UNDERSTAND THE CONNECTION

//! defining class: AuthService
export class AuthService {
  //* below are the logic to connect with the database and backend template
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) //your api end point
      .setProject(conf.appwriteProjectId); // your project id

    this.account = new Account(this.client);
  }

  //! Defining Methods:  class AuthService
  //hence we can call them using class name whenever there is a need.

  //* signup: creating a new account
  async createAccount({ email, password, name }) {
    try {
      // sending req to the backend
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      // if the account is successfully created
      if (userAccount) {
        console.log(userAccount);
        //Since the account is created successfully, go to login with credentials  and logged-in the user.
        return this.login({ email, password });
      } else {
        console.log(
          'no user account found. hence cannot sent forward to generate session'
        );
        // else check whatever value you got, it can be null
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
      console.log(typeof email, password);
      // It will take user's email and password to create a session else it will throw error
      let emailSession = await this.account.createEmailPasswordSession(
        email,
        password
      );
      console.log(`created session successfully`, emailSession);
      // returning the session
      return emailSession;
    } catch (error) {
      console.log(`unable to create session after logging-in due to `, error);
    }
  }

  //* Checking whether we are successfully logged-in or not ?? To get the details of current user's account
  async getCurrentUser() {
    try {
      let currentUserDetails = await this.account.get();
      console.log(`current user details are as follows `, currentUserDetails);
      return currentUserDetails;
    } catch (error) {
      console.log(
        `Unable to get the details of our current user due to `,
        error
      );
    }
    // if nothing matches then return null
    return null;
  }

  //* logout/delete session: to delete your current session
  async logout() {
    try {
      //  delete the current session
      let logoutDetails = await this.account.deleteSessions();
      console.log(`logout details`, logoutDetails);
      return logoutDetails;
    } catch (error) {
      console.log(
        `Unable to delete session or logout the current user due to `,
        error
      );
    }
  }
}

// creating an instance from classAuthService constructor
const auth_service = new AuthService();

export default auth_service;
