import { IrrigationSchedule as TIrrigationSchedule } from "../api/irrigationSchedule/IrrigationSchedule";

export const IRRIGATIONSCHEDULE_TITLE_FIELD = "id";

export const IrrigationScheduleTitle = (
  record: TIrrigationSchedule
): string => {
  return record.id?.toString() || String(record.id);
};
