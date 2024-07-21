import conf from '../conf/conf';
import { Client, Databases, Storage, ID, Query } from 'appwrite';

//! NOTE: PLEASE REFER APP_WRITE DOCUMENTATION TO UNDERSTAND THE CONNECTION

//! Defining class
class DatabaseService {
  client = new Client();

  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    // bucket or storage :: same
    this.bucket = new Storage(this.client);
  }

  //* create Post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      let documentCreated = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, // document id :: slug
        { title, content, featuredImage, status, userId }
      );
      console.log('creation of document is successfully done', documentCreated);
      //returning created document
      return documentCreated;
    } catch (error) {
      console.log(`Unable to create a new post due to `, error);
    }
  }

  //* update post
  // slug :: document id
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      let updatedDocument = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
      console.log('document is successfully updated ', updatedDocument);
      return updatedDocument;
    } catch (error) {
      console.log(`Unable to update the document due to `, error);
    }
  }

  //* delete post
  // slug :: document id
  async deletePost(slug) {
    try {
      let deletedDocument = await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      console.log('Successfully deleted document', deletedDocument);
      // returning "true" if the document is deleted
      return true; //successfully deleted
    } catch (error) {
      console.log(`Unable to delete the document due to `, error);
      return false;
    }
  }

  //* to get a particular document
  // slug :: document id
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(
        `Unable to get the specified document's slug(id) due to `,
        error
      );
      return false;
    }
  }

  //* to get documents based on queries ( like whose status is active )
  // to use query, it is mandatory to specific index in backend
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
