import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[qpointCalendarDayHeaderTemplate]',
})
export class CalendarDayHeaderTemplateDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
