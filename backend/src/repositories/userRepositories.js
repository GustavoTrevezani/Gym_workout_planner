import { prisma } from "../config/prisma.js";

async function createUser(data) {
  return prisma.user.create({
    data,
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

async function findAll() {
  return prisma.user.findMany({
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

async function deleteUser(id) {
  return prisma.user.delete({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}

const userRepository = {
  createUser,
  findAll,
  findByEmail,
  findById,
  updateUser,
  deleteUser,
};

export default userRepository;
