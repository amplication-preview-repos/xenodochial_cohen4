import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IrrigationScheduleService } from "./irrigationSchedule.service";
import { IrrigationScheduleControllerBase } from "./base/irrigationSchedule.controller.base";

@swagger.ApiTags("irrigationSchedules")
@common.Controller("irrigationSchedules")
export class IrrigationScheduleController extends IrrigationScheduleControllerBase {
  constructor(protected readonly service: IrrigationScheduleService) {
    super(service);
  }
}
