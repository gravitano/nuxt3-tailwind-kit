const DUMMY_USER = {
  id: 1,
  name: 'John Doe',
  email: 'admin@example.com',
  password: 'admin',
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (body.email !== DUMMY_USER.email || body.password !== DUMMY_USER.password) {
    setResponseStatus(event, 401, 'Unauthenticated')
    return {
      error: 'Unauthenticated',
    }
  }

  return {
    token: `dummy-token-${DUMMY_USER.id}`,
    user: DUMMY_USER,
  }
})
