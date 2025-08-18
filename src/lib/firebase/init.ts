import * as admin from 'firebase-admin';


const serviceAccountCredentials: admin.ServiceAccount = {
  projectId: process.env.FIREBASE_ADMIN_SDK_PROJECT_ID,
  clientEmail: process.env.FIREBASE_ADMIN_SDK_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_ADMIN_SDK_PRIVATE_KEY?.replace(/\\n/g, '\n'),
}


export type FbUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  phoneNumber: string | null;
  creationTime: string | null;
  lastSignInTime: string | null;
};
export class FirebaseAdminService {
  private firebaseApp: admin.app.App;

  constructor() {
    if (admin.apps.length > 0) {
      this.firebaseApp = admin.app();
    } else {
      this.firebaseApp = admin.initializeApp({
        credential: admin.credential.cert(serviceAccountCredentials),
      });
    }
  }

  getAuth(): admin.auth.Auth {
    return admin.auth();
  }
  getApp() {
    return this.firebaseApp;
  }

  async listAllUsers(nextPageToken?: string) {
    const listUsersResult = await admin.auth().listUsers(1000, nextPageToken);
    listUsersResult.users.forEach((userRecord) => {
      console.log("User:", userRecord.toJSON());
    });


    if (listUsersResult.pageToken) {
      // List next batch of users.
      await this.listAllUsers(listUsersResult.pageToken);
    }
  }

  async listUsers(count?: number) {
    const arr: FbUser[] = [];
    console.log("List Users Function")
    const listUsersResult = await admin.auth().listUsers(count);

    listUsersResult.users.forEach((userRecord) => {
      console.log("User:", userRecord.toJSON());
      arr.push({
        uid: userRecord.uid,
        email: userRecord.email ?? null,
        displayName: userRecord.displayName ?? null,
        phoneNumber: userRecord.phoneNumber ?? null,
        creationTime: userRecord.metadata.creationTime ?? null,
        lastSignInTime: userRecord.metadata.lastSignInTime ?? null,
      });
    });
    return arr;

  }
}
