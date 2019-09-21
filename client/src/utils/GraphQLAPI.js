const endpointURL = "http://localhost:8080/graphql";

export async function getGemstones() {
  const response = await fetch(endpointURL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `{
                getAllChakras{
                  id
                  name
                  gemstones {
                    id
                    name
                    metaProps
                    color
                    image
              
                  }
              
                }
              }`
    })
  });

  const responseBody = await response.json();
  return responseBody.data.getAllChakras;
  // export default allStones;
}

// export default allStones;
