import { IrrigationScheduleWhereInput } from "./IrrigationScheduleWhereInput";
import { IrrigationScheduleOrderByInput } from "./IrrigationScheduleOrderByInput";

export type IrrigationScheduleFindManyArgs = {
  where?: IrrigationScheduleWhereInput;
  orderBy?: Array<IrrigationScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
