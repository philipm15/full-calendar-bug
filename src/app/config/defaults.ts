import { QPointCalendarView } from '../types/calendar-options';

export const defaultViews: Array<QPointCalendarView> = [
  'dayGridDay',
  'dayGridWeek',
  'dayGridMonth',
];

export const defaultHeaderToolbar = {
  left: 'prev,next today',
  center: 'title',
  right: defaultViews.join(','),
};
