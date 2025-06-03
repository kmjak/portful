import { PrismaClient } from "@prisma/client";

/**
 * グローバルスコープに格納するための一時オブジェクト
 * PrismaClient の開発中のインスタンス重複生成を防ぐために使用
 */
const globalForPrisma = globalThis;

/**
 * Prisma クライアントのシングルトンインスタンス
 */
export const prismaClient =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "error", "warn"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prismaClient;
}

export default prismaClient;
