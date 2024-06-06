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
  Weatherstation as PrismaWeatherstation,
  Alert as PrismaAlert,
} from "@prisma/client";

export class WeatherstationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WeatherstationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.weatherstation.count(args);
  }

  async weatherstations<T extends Prisma.WeatherstationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherstationFindManyArgs>
  ): Promise<PrismaWeatherstation[]> {
    return this.prisma.weatherstation.findMany<Prisma.WeatherstationFindManyArgs>(
      args
    );
  }
  async weatherstation<T extends Prisma.WeatherstationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherstationFindUniqueArgs>
  ): Promise<PrismaWeatherstation | null> {
    return this.prisma.weatherstation.findUnique(args);
  }
  async createWeatherstation<T extends Prisma.WeatherstationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherstationCreateArgs>
  ): Promise<PrismaWeatherstation> {
    return this.prisma.weatherstation.create<T>(args);
  }
  async updateWeatherstation<T extends Prisma.WeatherstationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherstationUpdateArgs>
  ): Promise<PrismaWeatherstation> {
    return this.prisma.weatherstation.update<T>(args);
  }
  async deleteWeatherstation<T extends Prisma.WeatherstationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherstationDeleteArgs>
  ): Promise<PrismaWeatherstation> {
    return this.prisma.weatherstation.delete(args);
  }

  async findAlerts(
    parentId: string,
    args: Prisma.AlertFindManyArgs
  ): Promise<PrismaAlert[]> {
    return this.prisma.weatherstation
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .alerts(args);
  }
}