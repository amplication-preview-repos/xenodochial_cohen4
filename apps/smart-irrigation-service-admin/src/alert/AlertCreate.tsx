import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { WeatherstationTitle } from "../weatherstation/WeatherstationTitle";

export const AlertCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="level"
          label="level"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="message" multiline source="message" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="weatherstation.id"
          reference="Weatherstation"
          label="Weatherstation"
        >
          <SelectInput optionText={WeatherstationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
