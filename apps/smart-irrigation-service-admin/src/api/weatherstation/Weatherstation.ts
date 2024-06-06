import { Alert } from "../alert/Alert";

export type Weatherstation = {
  alerts?: Array<Alert>;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
};
