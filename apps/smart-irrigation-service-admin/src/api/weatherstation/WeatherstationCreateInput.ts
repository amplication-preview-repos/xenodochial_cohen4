import { AlertCreateNestedManyWithoutWeatherstationsInput } from "./AlertCreateNestedManyWithoutWeatherstationsInput";

export type WeatherstationCreateInput = {
  alerts?: AlertCreateNestedManyWithoutWeatherstationsInput;
  location?: string | null;
  name?: string | null;
};
