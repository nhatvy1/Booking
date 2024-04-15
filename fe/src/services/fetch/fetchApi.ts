import { backend_url } from '@/lib/constant'

export async function getDataWithAuth(url: string) {
  const cookie = '1232131'
  const res = await fetch(`${backend_url}/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookie}`,
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function postDataAuth<T>(url: string, data: T) {
  try {
    const res = await fetch(`${backend_url}/${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    const dataJson = await res.json()
    return dataJson
  } catch (e) {
    // throw new Error('Post data failed')
    return e
  }
}
