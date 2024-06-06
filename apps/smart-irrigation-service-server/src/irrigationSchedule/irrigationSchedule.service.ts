import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IrrigationScheduleServiceBase } from "./base/irrigationSchedule.service.base";

@Injectable()
export class IrrigationScheduleService extends IrrigationScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
