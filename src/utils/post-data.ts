
export const postData = async(apiUrl: string, data: Object) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  return await response.json()
}