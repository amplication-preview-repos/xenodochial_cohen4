import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { WeatherstationTitle } from "../weatherstation/WeatherstationTitle";

export const AlertEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
