const endpointURL = "https://radiant-coast-91248.herokuapp.com/graphql";

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
                    imageText
                  }
              
                }
              }`
    })
  });

  const responseBody = await response.json();
  return responseBody.data.getAllChakras;
}

