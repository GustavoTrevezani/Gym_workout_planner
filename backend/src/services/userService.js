async function createUserService({ name, email, password }) {
  if (!name || !email || !password) {
    throw new Error("Todos os campos são obrigatórios");
  }

  const user = {
    id: Date.now(),
    name,
    email,
    password,
  };

  return user;
}

const userService = { createUserService };

export default userService;
