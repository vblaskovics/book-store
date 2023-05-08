export async function getBearerToken() {
  const email = process.env.TEST_JWKS_EMAIL;
  const password = process.env.TEST_JWKS_PASSWORD;
  const tokenType = 'onlineToken';

  const response = await fetch(process.env.TEST_JWKS_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, tokenType }),
  });

  const responseData = await response.json();
  return `Bearer ${responseData.accessToken}`;
}
