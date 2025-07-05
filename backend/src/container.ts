import "reflect-metadata";
import { container } from "tsyringe";
import { HostConfigProvider } from "@/domain/provider/host/HostConfigProvider";
import { EnvHostConfigProvider } from "@/infrastructure/provider/host/EnvHostConfigProvider";
import { EnvLoader } from "./interface/config/EnvLoader";

EnvLoader.load();

// Provider
container.register<HostConfigProvider>("HostConfigProvider", {
  useClass: EnvHostConfigProvider,
});
