import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarDayHeaderTemplateDirective } from './directives/calendar-day-header-template.directive';
import { CalendarSlotLabelTemplateDirective } from './directives/calendar-slot-label-template.directive';
import { CalendarResourceLabelTemplateDirective } from './directives/calendar-resource-label-template.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarDayHeaderTemplateDirective,
    CalendarSlotLabelTemplateDirective,
    CalendarResourceLabelTemplateDirective
  ],
  imports: [BrowserModule, FullCalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
