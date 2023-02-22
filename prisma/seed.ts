import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: "omar@diamondacademy.com",
    phone: "+48328320923",
    firstName: "Omar",
    lastName: "Qatash",
    role: "USER",
    students: {
      create: [
        {
          firstName: "Abdurahman",
          lastName: "Qatash",
          gender: "MALE",
          location: "Az Zarqa - Jabal Tarik",
          userRelationship: "SIBLING",
        },
      ],
    },
  },
  {
    firstName: "Mohammad",
    lastName: "Alhouwari",
    email: "mohammad@diamondacademy.com",
    phone: "+48328320323",
    role: "USER",
    students: {
      create: [
        {
          firstName: "Abdullah",
          lastName: "Alhouwari",
          gender: "MALE",
          location: "Az Zarqa - Almosfat",
          userRelationship: "SIBLING",
        },
      ],
    },
  },
  {
    firstName: "Feras",
    lastName: "Alhouwari",
    email: "ferasalhouwari@gmail.com",
    phone: "+48328768322",
    role: "USER",
    students: {
      create: [
        {
          firstName: "Amjed",
          lastName: "Alhouwari",
          gender: "MALE",
          location: "Az Zarqa - Almosfat",
          userRelationship: "PARENT",
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start clearing the tables ...`);
  await clearData();
  console.log(`Clearing the tables finished ...`);
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

export const clearData = async () => {
  const users = await prisma.user.findMany({});
  const students = await prisma.student.findMany({});

  const deleteUser = async (user: any) => {
    return await prisma.user.delete({
      where: { id: user.id },
    });
  };
  const deleteStudent = async (student: any) => {
    return await prisma.student.delete({
      where: { id: student.id },
    });
  };

  const deleteUsers = async () => {
    return Promise.all(users.map((user) => deleteUser(user)));
  };
  const deleteStudents = async () => {
    return Promise.all(students.map((student) => deleteStudent(student)));
  };

  await deleteStudents();
  await deleteUsers();
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
