export async function handler(event, context) {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=50&has_breeds=1",
    {
      headers: {
        "x-api-key": process.env.CAT_API_KEY,
      },
    }
  );

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
