import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import resourcePlugin, { ResourceLaneContentArg } from '@fullcalendar/resource';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timegrid from '@fullcalendar/timegrid';

import { BehaviorSubject } from 'rxjs';
import {
  Calendar,
  DateInput,
  DateRangeInput,
  DayHeaderContentArg,
  SlotLabelContentArg,
} from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { defaultHeaderToolbar } from '../../config/defaults';
import { CalendarDayHeaderTemplateDirective } from '../../directives/calendar-day-header-template.directive';
import {
  QPointCalendarOptions,
  QPointCalendarView,
} from '../../types/calendar-options';
import { QPointCalendarResource } from '../../types/calendar-resource';
import { QPointCalendarEvent } from '../../types/calendar-event';
import { CalendarSlotLabelTemplateDirective } from '../../directives/calendar-slot-label-template.directive';
import { CalendarResourceLabelTemplateDirective } from '../../directives/calendar-resource-label-template.directive';

@Component({
  selector: 'qpoint-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  private events$$ = new BehaviorSubject<QPointCalendarEvent[]>([]);
  events$ = this.events$$.asObservable();

  private resources$$ = new BehaviorSubject<QPointCalendarResource[]>(null);
  resources$ = this.resources$$.asObservable();

  calendarOptions: QPointCalendarOptions = {
    plugins: [
      dayGridPlugin,
      interactionPlugin,
      listPlugin,
      resourcePlugin,
      resourceTimelinePlugin,
      timegrid,
    ],
    initialView: 'dayGridWeek',
    headerToolbar: { ...defaultHeaderToolbar },
    defaultAllDay: true,
    selectable: false,
    weekends: false,
    showNonCurrentDates: false,
    locale: 'de-DE',
    fixedWeekCount: false,
    stickyHeaderDates: true,
    droppable: false,
    nowIndicator: true,
    height: 'auto',
    displayEventEnd: true,
    // Render Hooks
    dayHeaderContent: this.dayHeaderRender.bind(this),
    slotLabelContent: this.slotLabelRender.bind(this),
    resourceLabelContent: this.resourceLabelContentRender.bind(this),
  };

  // ViewChild & ContentChild

  @ViewChild('calendar') calendar: FullCalendarComponent;
  @ContentChild(CalendarDayHeaderTemplateDirective)
  dayHeaderTemplate: CalendarDayHeaderTemplateDirective | null = null;
  @ContentChild(CalendarSlotLabelTemplateDirective)
  slotLabelTemplate: CalendarSlotLabelTemplateDirective | null = null;
  @ContentChild(CalendarResourceLabelTemplateDirective)
  resourceLaneContentTemplate: CalendarResourceLabelTemplateDirective | null = null;

  // Inputs

  @Input() calendarClasses: string[] = [];

  @Input() set options(options: QPointCalendarOptions) {
    this.calendarOptions = {
      ...this.calendarOptions,
      ...options,
    };
    this.cdr.markForCheck();
  }

  @Input() set events(events: QPointCalendarEvent[]) {
    this.events$$.next(events);
  }

  @Input() set resources(resources: QPointCalendarResource[]) {
    this.resources$$.next(resources);
  }

  constructor(private cdr: ChangeDetectorRef) {}

  // Calender Functions

  private get calendarApi(): Calendar {
    return this.calendar?.getApi();
  }

  private isCalendarReady() {
    return this.calendar && this.calendarApi;
  }

  goToDate(date: Date) {
    if (this.isCalendarReady()) {
      this.calendarApi.gotoDate(date);
      this.options = { ...this.options };
    }
  }

  changeView(
    view: QPointCalendarView,
    dateOrRange?: DateRangeInput | DateInput
  ) {
    if (this.isCalendarReady()) {
      this.calendarApi.changeView(view, dateOrRange);
      this.options = { ...this.options };
    }
  }

  // Render Hooks

  private dayHeaderRender(arg: DayHeaderContentArg) {
    if (this.dayHeaderTemplate && this.dayHeaderTemplate.templateRef) {
      const template = this.dayHeaderTemplate.templateRef.createEmbeddedView({
        arg,
      });
      template.detectChanges();

      return { domNodes: template.rootNodes };
    }

    return arg.text;
  }

  private slotLabelRender(arg: SlotLabelContentArg) {
    if (this.slotLabelTemplate && this.slotLabelTemplate.templateRef) {
      const template = this.slotLabelTemplate.templateRef.createEmbeddedView({
        arg,
      });
      template.detectChanges();

      return { domNodes: template.rootNodes };
    }

    return arg.text;
  }

  private resourceLabelContentRender(arg: ResourceLaneContentArg) {
    if (
      this.resourceLaneContentTemplate &&
      this.resourceLaneContentTemplate.templateRef
    ) {
      const template =
        this.resourceLaneContentTemplate.templateRef.createEmbeddedView({
          resource: arg.resource,
        });
      template.detectChanges();

      return { domNodes: template.rootNodes };
    }

    return arg.resource?.id;
  }
}
