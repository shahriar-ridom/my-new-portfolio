import { revalidatePath } from "next/cache";
import { prisma } from "./db";

const getProjects = async () => {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  revalidatePath("/projects");
  revalidatePath("/");
  return projects;
}
export default getProjects;
