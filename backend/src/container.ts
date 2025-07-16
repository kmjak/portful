import "reflect-metadata";
import { HostConfigProvider } from "@/domain/provider/host/HostConfigProvider";
import { SessionRepository } from "@/domain/repository/session/SessionRepository";
import { UserRepository } from "@/domain/repository/user/UserRepository";
import { FirebaseAuthService } from "@/infrastructure/firebase/FirebaseAuthService";
import { EnvHostConfigProvider } from "@/infrastructure/provider/host/EnvHostConfigProvider";
import { SessionRepositoryImpl } from "@/infrastructure/repository/prisma/SessionRepositoryImpl";
import { UserRepositoryImpl } from "@/infrastructure/repository/prisma/UserRepositoryImpl";
import { container } from "tsyringe";
import { FirebaseConfigProvider } from "./domain/provider/firebase/FirebaseConfigProvider";
import { EnvFirebaseConfigProvider } from "./infrastructure/provider/firebase/EnvFirebaseConfigProvider";
import { EnvLoader } from "./interface/config/EnvLoader";
import { FirebaseAdmin } from "@/infrastructure/firebase/FirebaseAdmin";
import { PrismaClient } from "@/infrastructure/prisma/PrismaClient";

EnvLoader.load();

// repository
container.register<SessionRepository>("SessionRepository", {
  useClass: SessionRepositoryImpl,
});
container.register<UserRepository>("UserRepository", {
  useClass: UserRepositoryImpl,
});

// service
container.register<FirebaseAuthService>("FirebaseAuthService", {
  useClass: FirebaseAuthService,
});

// admin / client
container.register<FirebaseAdmin>("FirebaseAdmin", {
  useClass: FirebaseAdmin,
});
container.register<PrismaClient>("PrismaClient", {
  useClass: PrismaClient,
});

// Provider
container.register<HostConfigProvider>("HostConfigProvider", {
  useClass: EnvHostConfigProvider,
});
container.register<FirebaseConfigProvider>("FirebaseConfigProvider", {
  useClass: EnvFirebaseConfigProvider,
});
