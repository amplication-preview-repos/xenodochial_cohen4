import { SortOrder } from "../../util/SortOrder";

export type AlertOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  level?: SortOrder;
  message?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  weatherstationId?: SortOrder;
};
