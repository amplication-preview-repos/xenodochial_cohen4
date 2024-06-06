import { FarmZoneWhereInput } from "./FarmZoneWhereInput";
import { FarmZoneOrderByInput } from "./FarmZoneOrderByInput";

export type FarmZoneFindManyArgs = {
  where?: FarmZoneWhereInput;
  orderBy?: Array<FarmZoneOrderByInput>;
  skip?: number;
  take?: number;
};
