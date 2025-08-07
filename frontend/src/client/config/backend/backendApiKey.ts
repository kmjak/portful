"server-only";

const envApiKey = process.env.BACKEND_X_API_KEY;

if (process.env.NODE_ENV === "production") {
  if (envApiKey == null || envApiKey.trim().length === 0) {
    throw new Error("BACKEND_X_API_KEY is not set or is empty");
  }
}

export const backendApiKey: string = envApiKey || "";
