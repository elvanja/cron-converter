'use strict';

var assert = require('assert');
var moment = require('moment');
describe('Cron', function() {
  var Cron = require('../src/cron');
  var schedules = [
    {
      schedule: '*/5 * * * *',
      prev: '2013-02-08T09:30:00.000Z',
      now: '2013-02-08T09:32:00.000Z',
      next: '2013-02-08T09:35:00.000Z'
    },
    {
      schedule: '30 1 * * *',
      prev: '2013-02-08T01:30:00.000Z',
      now: '2013-02-08T09:32:00.000Z',
      next: '2013-02-09T01:30:00.000Z'
    }
  ];
  schedules.forEach(function(schedule) {
    it('Should output next schedule time for ' + schedule.schedule, function() {
      var cron = new Cron();
      cron.parse(schedule.schedule);
      assert.equal(
        cron.next(moment(schedule.now)).toJSON(),
        schedule.next
      );
    });
    it('Should output last schedule time for ' + schedule.schedule, function() {
      var cron = new Cron();
      cron.parse(schedule.schedule);
      assert.equal(
        cron.prev(moment(schedule.now)).toJSON(),
        schedule.prev
      );
    });
  });
});
