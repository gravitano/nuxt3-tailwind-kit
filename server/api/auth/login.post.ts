export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  if (body.email === 'admin@example.com' && body.password === 'secret') {
    return {
      data: {
        user: {
          name: 'Admin',
          email: body.email,
        },
        token: 'TOKEN1234#',
      },
    };
  }

  return {
    error: {
      message: 'Unauthenticated',
    },
  };
});
