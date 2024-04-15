export async function POST(request: Request) {
  const res = await request.json()

  if (!res) {
    return Response.json(
      { message: 'Không nhận được token' },
      {
        status: 400,
      },
    )
  }

  return Response.json(
    { res },
    {
      status: 200,
      headers: { 'Set-Cookie': `sessionToken=${res}; Path=/` },
    },
  )
}
