import * as graphql from "@nestjs/graphql";
import { IrrigationScheduleResolverBase } from "./base/irrigationSchedule.resolver.base";
import { IrrigationSchedule } from "./base/IrrigationSchedule";
import { IrrigationScheduleService } from "./irrigationSchedule.service";

@graphql.Resolver(() => IrrigationSchedule)
export class IrrigationScheduleResolver extends IrrigationScheduleResolverBase {
  constructor(protected readonly service: IrrigationScheduleService) {
    super(service);
  }
}
