import { prisma } from "./db"

const getMyData = async () => {
  const data = await prisma.myDetails.findMany({})
  return data
}
export default getMyData
