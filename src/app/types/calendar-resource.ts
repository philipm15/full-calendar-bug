import { ResourceInput } from '@fullcalendar/resource';

export type QPointCalendarResource<T = Record<string | number | symbol, unknown>> = ResourceInput & {
  extendedProps?: T
};
