import { PrismaClient } from '@prisma/client';

export const load = async () => {
	const prisma = new PrismaClient();
	const words = await prisma.words.findMany();
	return {
		words
	};
};
