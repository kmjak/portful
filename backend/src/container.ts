import { HostConfigProvider } from "@/domain/provider/host/HostConfigProvider";
import { EnvHostConfigProvider } from "@/infrastructure/provider/host/EnvHostConfigProvider";
import "reflect-metadata";
import { container } from "tsyringe";
import { FirebaseConfigProvider } from "./domain/provider/firebase/FirebaseConfigProvider";
import { EnvFirebaseConfigProvider } from "./infrastructure/provider/firebase/EnvFirebaseConfigProvider";
import { EnvLoader } from "./interface/config/EnvLoader";

EnvLoader.load();

// Provider
container.register<HostConfigProvider>("HostConfigProvider", {
  useClass: EnvHostConfigProvider,
});

container.register<FirebaseConfigProvider>("FirebaseConfigProvider", {
  useClass: EnvFirebaseConfigProvider,
});
