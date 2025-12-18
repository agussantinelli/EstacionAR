export const APP_NAME = "EstacionAR";
export interface User {
  id: string;
  email: string;
  role: "ADMIN" | "USER" | "OWNER";
}
