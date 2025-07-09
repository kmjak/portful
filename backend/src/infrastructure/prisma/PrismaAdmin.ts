import { PrismaClient } from "@prisma/client";
import { injectable, singleton } from "tsyringe";

/**
 * @class PrismaAdmin
 * @description Prismaクライアントをシングルトンで提供するクラス
 */
@singleton()
@injectable()
export class PrismaAdmin {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient({
      log: ["query", "warn", "error"],
    });
  }

  /**
   * @description Prismaクライアントのインスタンスを返す
   * @returns {PrismaClient}
   */
  public getAdmin(): PrismaClient {
    return this.prisma;
  }
}
