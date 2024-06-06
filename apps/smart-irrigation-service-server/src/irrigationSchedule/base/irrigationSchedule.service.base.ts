/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  IrrigationSchedule as PrismaIrrigationSchedule,
} from "@prisma/client";

export class IrrigationScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.IrrigationScheduleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.irrigationSchedule.count(args);
  }

  async irrigationSchedules<T extends Prisma.IrrigationScheduleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IrrigationScheduleFindManyArgs>
  ): Promise<PrismaIrrigationSchedule[]> {
    return this.prisma.irrigationSchedule.findMany<Prisma.IrrigationScheduleFindManyArgs>(
      args
    );
  }
  async irrigationSchedule<T extends Prisma.IrrigationScheduleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.IrrigationScheduleFindUniqueArgs>
  ): Promise<PrismaIrrigationSchedule | null> {
    return this.prisma.irrigationSchedule.findUnique(args);
  }
  async createIrrigationSchedule<T extends Prisma.IrrigationScheduleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IrrigationScheduleCreateArgs>
  ): Promise<PrismaIrrigationSchedule> {
    return this.prisma.irrigationSchedule.create<T>(args);
  }
  async updateIrrigationSchedule<T extends Prisma.IrrigationScheduleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IrrigationScheduleUpdateArgs>
  ): Promise<PrismaIrrigationSchedule> {
    return this.prisma.irrigationSchedule.update<T>(args);
  }
  async deleteIrrigationSchedule<T extends Prisma.IrrigationScheduleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.IrrigationScheduleDeleteArgs>
  ): Promise<PrismaIrrigationSchedule> {
    return this.prisma.irrigationSchedule.delete(args);
  }
}
