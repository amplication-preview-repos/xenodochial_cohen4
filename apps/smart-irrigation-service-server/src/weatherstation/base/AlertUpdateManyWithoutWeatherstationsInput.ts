/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AlertWhereUniqueInput } from "../../alert/base/AlertWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AlertUpdateManyWithoutWeatherstationsInput {
  @Field(() => [AlertWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AlertWhereUniqueInput],
  })
  connect?: Array<AlertWhereUniqueInput>;

  @Field(() => [AlertWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AlertWhereUniqueInput],
  })
  disconnect?: Array<AlertWhereUniqueInput>;

  @Field(() => [AlertWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AlertWhereUniqueInput],
  })
  set?: Array<AlertWhereUniqueInput>;
}

export { AlertUpdateManyWithoutWeatherstationsInput as AlertUpdateManyWithoutWeatherstationsInput };