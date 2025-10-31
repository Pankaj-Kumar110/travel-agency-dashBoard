import { OAuthProvider, Query, ID } from "appwrite";
import { account, database, appwriteConfig } from "./client";

import { redirect } from "react-router";

export const loginWithGoogle = async () => {
  try {
    account.createOAuth2Session(OAuthProvider.Google);
  } catch (e) {
    console.log("loginWithGoogle", e);
  }
};

export const logoutUser = async () => {
  try {
    await account.deleteSession("current");
    return true;
  } catch (e) {
    console.log("loginWithGoogle", e);
    return null;
  }
};

export const getUser = async () => {
  try {
    const user = await account.get();

    if (!user) return redirect("/sign-in");

    const { documents } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [
        Query.equal("accountId", user.$id),
        Query.select(["name", "email", "imageUrl", "joinedAt", "accountId"]),
      ]
    );
  } catch (e) {
    console.log("getUser", e);
    return null;
  }
};

export const getGooglePicture = async () => {
  try {
    const session = await account.getSession("current");

    if (!session?.providerAccessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(
      "https://people.googleapis.com/v1/people/me?personFields=photos",
      {
        headers: {
          Authorization: `Bearer ${session.providerAccessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch profile photo");
    }

    const data = await response.json();
    const profilePhotoUrl = data.photos?.[0]?.url;

    if (!profilePhotoUrl) {
      throw new Error("No profile photo found");
    }

    return profilePhotoUrl;
  } catch (e) {
    console.log("Error fetching Google profile picture:", e);
    return null;
  }
};

export const storeUserData = async () => {
  try {
    const user = await account.get();

    if (!user) return null;

    const { documents } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", user.$id)]
    );

    if (documents.length > 0) return documents[0];

    const imageUrl = await getGooglePicture();

    const newUser = await database.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        accountId: user.$id,
        email: user.email,
        name: user.name,
        imageUrl: imageUrl || "",
        joinedAt: new Date().toISOString(),
      }
    );

    return newUser;
  } catch (e) {
    console.log("storeUserData", e);
    return null;
  }
};

export const getExistingUser = async () => {
  try {
    const user = await account.get();

    if (!user) return null;

    const { documents } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", user.$id)]
    );

    if (documents.length === 0) return null;

    return documents[0];
  } catch (e) {
    console.log("getExistingUser", e);
    return null;
  }
};
