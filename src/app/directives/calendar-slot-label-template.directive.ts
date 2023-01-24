import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[qpointCalendarSlotLabelTemplate]',
})
export class CalendarSlotLabelTemplateDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
