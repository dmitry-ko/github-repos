export async function githubGraphQLQuery(query: string) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({query})
  });
  return response.json();
}