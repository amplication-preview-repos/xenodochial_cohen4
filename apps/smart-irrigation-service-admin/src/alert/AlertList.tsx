import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { WEATHERSTATION_TITLE_FIELD } from "../weatherstation/WeatherstationTitle";

export const AlertList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Alerts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="level" source="level" />
        <TextField label="message" source="message" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Weatherstation"
          source="weatherstation.id"
          reference="Weatherstation"
        >
          <TextField source={WEATHERSTATION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
