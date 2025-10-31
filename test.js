import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6903241b00344c355454");

const databases = new Databases(client);

async function listTables() {
  const response = await databases.listTables("690324d6001bfa7f7bbb");
  console.log(response); // => response.tables[0].$id
}

listTables();
