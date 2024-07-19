import conf from '../conf/conf';
import { Client, Databases, Storage, ID, Query } from 'appwrite';

//! NOTE: PLEASE REFER APP_WRITE DOCUMENTATION TO UNDERSTAND THE CONNECTION

//! Defining class
class DatabaseService {
  Client = new Client();

  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //* create Post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log(`AppwriteService:: createPost:: error `, error);
    }
  }

  //* update post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log(`AppwriteService:: updatePost:: error `, error);
    }
  }

  //* delete post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true; //successfully deleted
    } catch (error) {
      console.log(`AppwriteService:: deletePost:: error `, error);
      return false;
    }
  }

  //* to get a particular document
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(`AppwriteService:: getPost:: error `, error);
      return false;
    }
  }

  //* to get documents based on queries ( like whose status is active )
  async getPosts(queries = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(`AppwriteService:: getPostsBasedOnQueries:: error `, error);
      return false;
    }
  }

  //! FILE UPLOAD SERVICE
  //* upload file
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(`AppwriteService:: uploadFile :: error `, error);
      return false;
    }
  }

  //* delete file
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log(`AppwriteService:: deleteFile :: error `, error);
      return false;
    }
  }

  //* get file
  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log(`AppwriteService:: getFilePreview :: error `, error);
      return false;
    }
  }
}

const service = new DatabaseService();

export default service;
