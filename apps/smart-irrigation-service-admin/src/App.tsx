import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SensorList } from "./sensor/SensorList";
import { SensorCreate } from "./sensor/SensorCreate";
import { SensorEdit } from "./sensor/SensorEdit";
import { SensorShow } from "./sensor/SensorShow";
import { DeviceList } from "./device/DeviceList";
import { DeviceCreate } from "./device/DeviceCreate";
import { DeviceEdit } from "./device/DeviceEdit";
import { DeviceShow } from "./device/DeviceShow";
import { IrrigationScheduleList } from "./irrigationSchedule/IrrigationScheduleList";
import { IrrigationScheduleCreate } from "./irrigationSchedule/IrrigationScheduleCreate";
import { IrrigationScheduleEdit } from "./irrigationSchedule/IrrigationScheduleEdit";
import { IrrigationScheduleShow } from "./irrigationSchedule/IrrigationScheduleShow";
import { FarmZoneList } from "./farmZone/FarmZoneList";
import { FarmZoneCreate } from "./farmZone/FarmZoneCreate";
import { FarmZoneEdit } from "./farmZone/FarmZoneEdit";
import { FarmZoneShow } from "./farmZone/FarmZoneShow";
import { WeatherstationList } from "./weatherstation/WeatherstationList";
import { WeatherstationCreate } from "./weatherstation/WeatherstationCreate";
import { WeatherstationEdit } from "./weatherstation/WeatherstationEdit";
import { WeatherstationShow } from "./weatherstation/WeatherstationShow";
import { AlertList } from "./alert/AlertList";
import { AlertCreate } from "./alert/AlertCreate";
import { AlertEdit } from "./alert/AlertEdit";
import { AlertShow } from "./alert/AlertShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SmartIrrigationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Sensor"
          list={SensorList}
          edit={SensorEdit}
          create={SensorCreate}
          show={SensorShow}
        />
        <Resource
          name="Device"
          list={DeviceList}
          edit={DeviceEdit}
          create={DeviceCreate}
          show={DeviceShow}
        />
        <Resource
          name="IrrigationSchedule"
          list={IrrigationScheduleList}
          edit={IrrigationScheduleEdit}
          create={IrrigationScheduleCreate}
          show={IrrigationScheduleShow}
        />
        <Resource
          name="FarmZone"
          list={FarmZoneList}
          edit={FarmZoneEdit}
          create={FarmZoneCreate}
          show={FarmZoneShow}
        />
        <Resource
          name="Weatherstation"
          list={WeatherstationList}
          edit={WeatherstationEdit}
          create={WeatherstationCreate}
          show={WeatherstationShow}
        />
        <Resource
          name="Alert"
          list={AlertList}
          edit={AlertEdit}
          create={AlertCreate}
          show={AlertShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
