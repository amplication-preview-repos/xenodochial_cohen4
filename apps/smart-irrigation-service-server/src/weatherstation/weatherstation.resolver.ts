import * as graphql from "@nestjs/graphql";
import { WeatherstationResolverBase } from "./base/weatherstation.resolver.base";
import { Weatherstation } from "./base/Weatherstation";
import { WeatherstationService } from "./weatherstation.service";

@graphql.Resolver(() => Weatherstation)
export class WeatherstationResolver extends WeatherstationResolverBase {
  constructor(protected readonly service: WeatherstationService) {
    super(service);
  }
}
