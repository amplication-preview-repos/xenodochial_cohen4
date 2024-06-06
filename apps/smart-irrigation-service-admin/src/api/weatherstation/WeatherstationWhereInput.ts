import { AlertListRelationFilter } from "../alert/AlertListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WeatherstationWhereInput = {
  alerts?: AlertListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
};
