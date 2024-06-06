import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FarmZoneService } from "./farmZone.service";
import { FarmZoneControllerBase } from "./base/farmZone.controller.base";

@swagger.ApiTags("farmZones")
@common.Controller("farmZones")
export class FarmZoneController extends FarmZoneControllerBase {
  constructor(protected readonly service: FarmZoneService) {
    super(service);
  }
}
