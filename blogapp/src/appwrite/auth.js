import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf.js'

export class AuthService {

    client = new Client();
    account;

    constructor(){

        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

//---------------------------------------AuthService methods-----------------------------------------------

    async createAccount({email,password,name}){
        try {
          const userAccount = await this.account.
          create(ID.unique(), email, password, name)

          if (userAccount) {
            return this.login({email, password})
          } else {
            return userAccount
          }
        } catch (error) {
            console.log(error)
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            console.log(error);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser() :: ",error);
            return null
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout() :: ",error);
        }
    }

//--------------------------------------AuthService methods End-------------------------------------------- 
}

const authService = new AuthService()

export default authService





