import { FarmZone as TFarmZone } from "../api/farmZone/FarmZone";

export const FARMZONE_TITLE_FIELD = "id";

export const FarmZoneTitle = (record: TFarmZone): string => {
  return record.id?.toString() || String(record.id);
};
