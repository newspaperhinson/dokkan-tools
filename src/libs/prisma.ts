import { PrismaClient } from "@prisma/client";

class PrismaClientSingleton {
  private static instance?: PrismaClient;

  public static getInstance() {
    if (PrismaClientSingleton.instance === undefined) {
      PrismaClientSingleton.instance = new PrismaClient();
    }
    return PrismaClientSingleton.instance;
  }
}

export default PrismaClientSingleton.getInstance();