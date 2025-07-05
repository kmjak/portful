import { injectable, inject } from "tsyringe";
import { HostConfigProvider } from "@/domain/provider/host/HostConfigProvider";
import { ApiKey } from "@/domain/model/host";

@injectable()
export class ApiKeyAuthUseCase {
  constructor(
    @inject("HostConfigProvider")
    private readonly hostConfigProvider: HostConfigProvider
  ) {}

  public async execute(apiKey: string): Promise<boolean> {
    const hostConfig = this.hostConfigProvider.load();
    const envApiKey = hostConfig.getApiKey();

    return envApiKey.equals(ApiKey.of(apiKey));
  }
}
