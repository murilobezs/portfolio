import { connectToDatabase } from '@/lib/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const db = await connectToDatabase()
    const publications = await db
      .collection('publications')
      .find({})
      .sort({ publishedAt: -1 })
      .toArray()

    return NextResponse.json(publications)
  } catch (error) {
    console.error('Erro ao buscar publicações:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar publicações' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validação básica
    if (!body.title || !body.description || !body.category) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: title, description, category' },
        { status: 400 }
      )
    }

    const db = await connectToDatabase()
    const result = await db.collection('publications').insertOne({
      ...body,
      publishedAt: new Date(),
      createdAt: new Date(),
      views: 0,
      likes: 0,
    })

    return NextResponse.json(
      { _id: result.insertedId, ...body },
      { status: 201 }
    )
  } catch (error) {
    console.error('Erro ao criar publicação:', error)
    return NextResponse.json(
      { error: 'Erro ao criar publicação' },
      { status: 500 }
    )
  }
}
