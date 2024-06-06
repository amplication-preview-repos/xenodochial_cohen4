import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WeatherstationService } from "./weatherstation.service";
import { WeatherstationControllerBase } from "./base/weatherstation.controller.base";

@swagger.ApiTags("weatherstations")
@common.Controller("weatherstations")
export class WeatherstationController extends WeatherstationControllerBase {
  constructor(protected readonly service: WeatherstationService) {
    super(service);
  }
}
