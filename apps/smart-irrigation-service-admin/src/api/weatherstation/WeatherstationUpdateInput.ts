import { AlertUpdateManyWithoutWeatherstationsInput } from "./AlertUpdateManyWithoutWeatherstationsInput";

export type WeatherstationUpdateInput = {
  alerts?: AlertUpdateManyWithoutWeatherstationsInput;
  location?: string | null;
  name?: string | null;
};
