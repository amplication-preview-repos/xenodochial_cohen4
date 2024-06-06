import { Sensor as TSensor } from "../api/sensor/Sensor";

export const SENSOR_TITLE_FIELD = "id";

export const SensorTitle = (record: TSensor): string => {
  return record.id?.toString() || String(record.id);
};
