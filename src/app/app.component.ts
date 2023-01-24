import { Component } from '@angular/core';
import { defaultHeaderToolbar } from './config/defaults';
import { QPointCalendarEvent } from './types/calendar-event';
import { QPointCalendarOptions } from './types/calendar-options';
import { QPointCalendarResource } from './types/calendar-resource';
import { addDays } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  calendarOptions: QPointCalendarOptions = {
    initialView: 'resourceTimelineWeek',
    weekends: true,
    headerToolbar: {
      ...defaultHeaderToolbar,
      right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth',
    },
    slotDuration: { days: 1 },
    slotLabelClassNames: ['resource-timeline-label'],
    nowIndicator: false,
    defaultAllDay: false,
  };

  resources: QPointCalendarResource[] = [
    {
      id: '1',
      extendedProps: {
        name: 'Devon Lane',
        img: 'https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      },
    },
    {
      id: '2',
      extendedProps: {
        name: 'Levon Dane',
        img: 'https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      },
    },
    {
      id: '3',
      extendedProps: {
        name: 'Lane Devon',
        img: 'https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      },
    },
  ];

  events: QPointCalendarEvent[] = [
    {
      id: '1',
      resourceId: this.resources[0].id,
      start: new Date(),
      extendedProps: {
        title: 'A5 Colombier',
        name: 'Paul Heiter',
        description: '?????',
        color: 'blue',
      },
      backgroundColor: 'lightblue',
      borderColor: 'transparent',
    },
    {
      id: '2',
      resourceId: this.resources[1].id,
      start: addDays(new Date(), 1),
      extendedProps: {
        title: 'A5 Colombier',
        name: 'Paul Heiter',
        description: '?????',
        color: 'blue',
      },
      backgroundColor: 'lightblue',
      borderColor: 'transparent',
    },
    {
      id: '2',
      resourceId: this.resources[2].id,
      start: new Date(),
      end: addDays(new Date(), 2),
      extendedProps: {
        title: 'Urlaub',
      },
      display: 'background',
      backgroundColor: 'transparent',
    },
  ];
}
