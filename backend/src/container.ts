import "reflect-metadata";
import { container } from "tsyringe";
import { HostConfigProvider } from "@/domain/provider/host/HostConfigProvider";
import { EnvHostConfigProvider } from "@/infrastructure/provider/host/EnvHostConfigProvider";

// Provider
container.register<HostConfigProvider>("HostConfigProvider", {
  useClass: EnvHostConfigProvider,
});
