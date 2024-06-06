import * as graphql from "@nestjs/graphql";
import { FarmZoneResolverBase } from "./base/farmZone.resolver.base";
import { FarmZone } from "./base/FarmZone";
import { FarmZoneService } from "./farmZone.service";

@graphql.Resolver(() => FarmZone)
export class FarmZoneResolver extends FarmZoneResolverBase {
  constructor(protected readonly service: FarmZoneService) {
    super(service);
  }
}
