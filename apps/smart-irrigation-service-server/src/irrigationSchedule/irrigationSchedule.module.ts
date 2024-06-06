import { Module } from "@nestjs/common";
import { IrrigationScheduleModuleBase } from "./base/irrigationSchedule.module.base";
import { IrrigationScheduleService } from "./irrigationSchedule.service";
import { IrrigationScheduleController } from "./irrigationSchedule.controller";
import { IrrigationScheduleResolver } from "./irrigationSchedule.resolver";

@Module({
  imports: [IrrigationScheduleModuleBase],
  controllers: [IrrigationScheduleController],
  providers: [IrrigationScheduleService, IrrigationScheduleResolver],
  exports: [IrrigationScheduleService],
})
export class IrrigationScheduleModule {}
