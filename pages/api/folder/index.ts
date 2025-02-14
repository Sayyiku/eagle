import { getPrisma } from "@/lib/prisma";

export default async function handler(req, res) {
  const prisma = getPrisma();

  const {
    orderBy = {
      images: {
        _count: "desc",
      },
    },
  } = req.query;

  const [count, data] = await Promise.all([
    prisma.folder.count(),
    prisma.folder.findMany({
      include: {
        _count: {
          select: {
            images: true,
          },
        },
        images: {
          take: 1,
        },
      },
      orderBy,
    }),
  ]);

  res.json({
    count,
    data,
  });
}
