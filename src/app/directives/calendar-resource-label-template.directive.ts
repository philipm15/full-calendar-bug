import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[qpointCalendarResourceLabelTemplate]',
})
export class CalendarResourceLabelTemplateDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
