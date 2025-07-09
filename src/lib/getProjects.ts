import { prisma } from "./db";

const getProjects = async () => {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return projects;
}
export default getProjects;
