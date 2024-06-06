import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WeatherstationWhereUniqueInput } from "../weatherstation/WeatherstationWhereUniqueInput";

export type AlertUpdateInput = {
  level?: "Option1" | null;
  message?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
  weatherstation?: WeatherstationWhereUniqueInput | null;
};
