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
    select: {
      id: true,
      name: true,
      email: true,
      height: true,
      weight: true,
      age: true,
    },
  });
}

async function updateUser(id, data) {
  return prisma.user.update({
    where: { id },
    data: data,
    select: {
      id: true,
      name: true,
      email: true,
      height: true,
      weight: true,
      age: true,
    },
  });
}

const userRepository = {
  createUser,
  findByEmail,
  findById,
  updateUser,
};

export default userRepository;
