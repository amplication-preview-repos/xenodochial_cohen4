import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FarmZoneServiceBase } from "./base/farmZone.service.base";

@Injectable()
export class FarmZoneService extends FarmZoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
