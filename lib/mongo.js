import "server-only";
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://harshkumarworld:BGBiRe0oU2BAbEDV@mycompanydata.sqx2z.mongodb.net/MyCompanyData?retryWrites=true&w=majority&appName=MyCompanyData";

const client = new MongoClient(uri);
const clientPromise = client.connect();

export async function getCollection(name) {
  const client = await clientPromise;
  return client.db().collection(name);
}
