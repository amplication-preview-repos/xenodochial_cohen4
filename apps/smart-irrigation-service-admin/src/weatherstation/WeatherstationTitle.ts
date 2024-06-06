import { Weatherstation as TWeatherstation } from "../api/weatherstation/Weatherstation";

export const WEATHERSTATION_TITLE_FIELD = "name";

export const WeatherstationTitle = (record: TWeatherstation): string => {
  return record.name?.toString() || String(record.id);
};
