import { prisma } from "../config/prisma.js";

async function createUser(data) {
  return prisma.user.create({
    data,
  });
}

async function findByEmail(email) {
  return prisma.user.findUnique({
    where: { email },
  });
}

async function findById(id) {
  return prisma.user.findUnique({
    where: { id },
  });
}

const userRepository = {
  createUser,
  findByEmail,
  findById,
};

export default userRepository;
