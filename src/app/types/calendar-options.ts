import { CalendarOptions } from '@fullcalendar/core';

export type QPointCalendarView =
  'dayGridDay'
  | 'dayGridWeek'
  | 'dayGridMonth'
  | 'resourceTimelineDay'
  | 'resourceTimelineWeek'
  | 'resourceTimelineMonth'
  | 'resourceTimelineYear';

export type QPointCalendarOptions = Partial<CalendarOptions> & {
  initialView: QPointCalendarView | string
};
