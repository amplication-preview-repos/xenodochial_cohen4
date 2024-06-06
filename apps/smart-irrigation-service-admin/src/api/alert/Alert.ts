import { User } from "../user/User";
import { Weatherstation } from "../weatherstation/Weatherstation";

export type Alert = {
  createdAt: Date;
  id: string;
  level?: "Option1" | null;
  message: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
  weatherstation?: Weatherstation | null;
};
