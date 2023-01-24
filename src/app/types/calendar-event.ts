import { EventInput, EventClickArg, EventDropArg } from '@fullcalendar/core';

export type QPointEventDisplay = 'auto' | 'block' | 'listItem' | 'background' | 'inverseBackground' | 'none';

export type QPointCalendarEvent<T = Record<string | number | symbol, unknown>> = EventInput & {
  display?: QPointEventDisplay
  extendedProps?: T
};

export type QPointEventClicked = EventClickArg;
export type QPointEventDropped = EventDropArg;
