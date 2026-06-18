import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI não foi definida nas variáveis de ambiente')
}

const uri = process.env.MONGODB_URI
let client: MongoClient | null = null
let cachedDb: any = null

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb
  }

  client = new MongoClient(uri)
  const db = client.db('portfolio')

  cachedDb = db
  return db
}

export async function closeDatabase() {
  if (client) {
    await client.close()
    client = null
    cachedDb = null
  }
}
