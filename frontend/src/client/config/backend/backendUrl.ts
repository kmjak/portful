const envUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

if (process.env.NODE_ENV === "production") {
  if (envUrl == null || envUrl.trim().length === 0) {
    throw new Error("NEXT_PUBLIC_BACKEND_URL is not set or is empty");
  }
}

export const backendUrl: string = envUrl || "http://localhost:8080";
