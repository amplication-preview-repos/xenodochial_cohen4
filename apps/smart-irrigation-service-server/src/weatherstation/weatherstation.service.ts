import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeatherstationServiceBase } from "./base/weatherstation.service.base";

@Injectable()
export class WeatherstationService extends WeatherstationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
