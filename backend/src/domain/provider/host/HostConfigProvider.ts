import { HostConfig } from "@/domain/model/host";

/**
 * @description HostConfigProviderは、ホストの設定を提供するインターフェースです。
 */
export interface HostConfigProvider {
  load(): HostConfig;
}
