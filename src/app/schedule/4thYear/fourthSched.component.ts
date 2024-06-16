import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';

@Component({
  templateUrl: 'fourthSched.component.html',
})
export class fourthSchedComponent implements AfterViewInit {
  @ViewChild('schedulerReference') scheduler: jqxSchedulerComponent;

  ngAfterViewInit(): void {}

  // generateAppointments(): any {
  //   let appointments = new Array();
  // }
  source: any = {
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'subject', type: 'string' },
      { name: 'calendar', type: 'string' },
      { name: 'start', type: 'date' },
      { name: 'end', type: 'date' },
    ],
    id: 'id',
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  date: any = new jqx.date();

  appointmentDataFields: any = {
    from: 'start',
    to: 'end',
    id: 'id',
    description: 'description',
    location: 'location',
    subject: 'subject',
    resourceId: 'calendar',
  };
  resources: any = {
    colorScheme: 'scheme03',
    dataField: 'calendar',
    source: new jqx.dataAdapter(this.source),
  };
  views: any[] = [
    {
      type: 'dayView',
      timeRuler: { hidden: false, scaleStartHour: 6 },
    },
    {
      type: 'weekView',
      timeRuler: { hidden: false, scaleStartHour: 6 },
    },
    { type: 'monthView' },
  ];

  editDialogCreate = (dialog, fields, editAppointment) => {
    // Hide the 'Repeat' field
    fields.repeatContainer.hide();
    fields.allDayContainer.hide();
    fields.colorContainer.hide();
    fields.statusContainer.hide();
    fields.timeZoneContainer.hide();
  };
}
