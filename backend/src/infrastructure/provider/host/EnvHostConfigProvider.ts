import { ApiKey, FrontendUrl, HostConfig } from "@/domain/model/host";
import { HostConfigProvider } from "@/domain/provider/host/HostConfigProvider";

export class EnvHostConfigProvider implements HostConfigProvider {
  public load(): HostConfig {
    const frontendUrl = FrontendUrl.of(process.env.FRONTEND_URL || "");
    const apiKey = ApiKey.of(process.env.HOST_X_API_KEY || "");

    return HostConfig.create(frontendUrl, apiKey);
  }
}
