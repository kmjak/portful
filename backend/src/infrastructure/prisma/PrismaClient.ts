import { PrismaClient as PrismaClientLib } from "@prisma/client";
import { injectable, singleton } from "tsyringe";

/**
 * @class PrismaClient
 * @description Prismaクライアントをシングルトンで提供するクラス
 */
@singleton()
@injectable()
export class PrismaClient {
  private readonly prisma: PrismaClientLib;

  public constructor() {
    this.prisma = new PrismaClientLib({
      log: ["query", "warn", "error"],
    });
  }

  /**
   * @description Prismaクライアントのインスタンスを返す
   * @returns {PrismaClientLib}
   */
  public getClient(): PrismaClientLib {
    return this.prisma;
  }
}
