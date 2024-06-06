/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SensorWhereInput } from "./SensorWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SensorListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SensorWhereInput,
  })
  @ValidateNested()
  @Type(() => SensorWhereInput)
  @IsOptional()
  @Field(() => SensorWhereInput, {
    nullable: true,
  })
  every?: SensorWhereInput;

  @ApiProperty({
    required: false,
    type: () => SensorWhereInput,
  })
  @ValidateNested()
  @Type(() => SensorWhereInput)
  @IsOptional()
  @Field(() => SensorWhereInput, {
    nullable: true,
  })
  some?: SensorWhereInput;

  @ApiProperty({
    required: false,
    type: () => SensorWhereInput,
  })
  @ValidateNested()
  @Type(() => SensorWhereInput)
  @IsOptional()
  @Field(() => SensorWhereInput, {
    nullable: true,
  })
  none?: SensorWhereInput;
}
export { SensorListRelationFilter as SensorListRelationFilter };
