import { Module } from "@nestjs/common";
import { WeatherstationModuleBase } from "./base/weatherstation.module.base";
import { WeatherstationService } from "./weatherstation.service";
import { WeatherstationController } from "./weatherstation.controller";
import { WeatherstationResolver } from "./weatherstation.resolver";

@Module({
  imports: [WeatherstationModuleBase],
  controllers: [WeatherstationController],
  providers: [WeatherstationService, WeatherstationResolver],
  exports: [WeatherstationService],
})
export class WeatherstationModule {}
