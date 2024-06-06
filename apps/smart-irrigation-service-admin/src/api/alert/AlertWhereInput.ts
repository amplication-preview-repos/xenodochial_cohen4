import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WeatherstationWhereUniqueInput } from "../weatherstation/WeatherstationWhereUniqueInput";

export type AlertWhereInput = {
  id?: StringFilter;
  level?: "Option1";
  message?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  weatherstation?: WeatherstationWhereUniqueInput;
};
