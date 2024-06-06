/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Sensor } from "./Sensor";
import { SensorCountArgs } from "./SensorCountArgs";
import { SensorFindManyArgs } from "./SensorFindManyArgs";
import { SensorFindUniqueArgs } from "./SensorFindUniqueArgs";
import { DeleteSensorArgs } from "./DeleteSensorArgs";
import { SensorService } from "../sensor.service";
@graphql.Resolver(() => Sensor)
export class SensorResolverBase {
  constructor(protected readonly service: SensorService) {}

  async _sensorsMeta(
    @graphql.Args() args: SensorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Sensor])
  async sensors(@graphql.Args() args: SensorFindManyArgs): Promise<Sensor[]> {
    return this.service.sensors(args);
  }

  @graphql.Query(() => Sensor, { nullable: true })
  async sensor(
    @graphql.Args() args: SensorFindUniqueArgs
  ): Promise<Sensor | null> {
    const result = await this.service.sensor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Sensor)
  async deleteSensor(
    @graphql.Args() args: DeleteSensorArgs
  ): Promise<Sensor | null> {
    try {
      return await this.service.deleteSensor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}