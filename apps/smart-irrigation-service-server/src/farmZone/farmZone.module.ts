import { Module } from "@nestjs/common";
import { FarmZoneModuleBase } from "./base/farmZone.module.base";
import { FarmZoneService } from "./farmZone.service";
import { FarmZoneController } from "./farmZone.controller";
import { FarmZoneResolver } from "./farmZone.resolver";

@Module({
  imports: [FarmZoneModuleBase],
  controllers: [FarmZoneController],
  providers: [FarmZoneService, FarmZoneResolver],
  exports: [FarmZoneService],
})
export class FarmZoneModule {}
