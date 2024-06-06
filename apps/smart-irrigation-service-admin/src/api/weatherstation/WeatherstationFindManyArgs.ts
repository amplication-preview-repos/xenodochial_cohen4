import { WeatherstationWhereInput } from "./WeatherstationWhereInput";
import { WeatherstationOrderByInput } from "./WeatherstationOrderByInput";

export type WeatherstationFindManyArgs = {
  where?: WeatherstationWhereInput;
  orderBy?: Array<WeatherstationOrderByInput>;
  skip?: number;
  take?: number;
};
