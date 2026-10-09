import test from 'node:test';
import assert from 'node:assert/strict';
import {parseDate as D, today, iso, addYears, calendarDuration, percentage, percentDate, nextAnniversary, validate, makeCalendar} from '../dates.mjs';
import { ads } from '../config.mjs';

test('Civil dates reject invalid and impossible values',()=>{
  for(const value of ['',undefined,'2024-2-1','2023-02-29','2024-04-31','1899-01-01','2024-13-01','<script>','2024-01-01T00:00:00Z']) assert.throws(()=>D(value));
  assert.equal(iso(D('2024-02-29')),'2024-02-29');
});
test('A third of a life and an exact half-life milestone',()=>{
  const b=D('2000-01-01'), s=D('2020-01-01'), at=D('2030-01-01');
  assert.ok(Math.abs(percentage(b,s,at)-100/3)<.02);
  assert.equal(iso(percentDate(b,s,50)),'2040-01-01');
});
test('Zero duration, relationship since birth and unreachable 100%',()=>{
  const b=D('2000-01-01'),s=D('2020-01-01');
  assert.equal(percentage(b,s,s),0);
  assert.equal(percentDate(b,s,100),null);
  assert.equal(percentage(b,b,b),100);
  assert.equal(percentDate(b,b,75),b);
  assert.throws(()=>percentage(s,b,s));
  assert.throws(()=>percentage(b,s,b));
  for(const p of [0,-1,101,NaN,Infinity]) assert.throws(()=>percentDate(b,s,p));
  assert.equal(percentDate(b,s,99.99),null);
});
test('Milestones return first day meeting percentage across leap and nonleap years',()=>{
  for(const birth of ['1950-03-31','1996-02-29','2000-12-31']){
    const b=D(birth),s=addYears(b,20)+43;
    for(const p of [1,10,25,33.3333,50,75,90,99]){
      const date=percentDate(b,s,p);
      assert.ok(percentage(b,s,date)>=p-1e-8);
      if(date>s) assert.ok(percentage(b,s,date-1)<p+1e-8);
    }
  }
});
test('Civil-day arithmetic does not gain or lose a day around DST',()=>{
  for(const [a,b] of [['2026-03-28','2026-03-30'],['2026-10-24','2026-10-26']]) assert.equal(D(b)-D(a),2);
  assert.equal(D('2024-03-01')-D('2024-02-28'),2);
  assert.equal(D('2023-03-01')-D('2023-02-28'),1);
});
test('February 29 anniversaries clamp to February 28',()=>{
  const start=D('2024-02-29');
  assert.equal(iso(addYears(start,1)),'2025-02-28');
  assert.equal(iso(addYears(start,4)),'2028-02-29');
  assert.deepEqual(nextAnniversary(start,D('2025-02-28')),{date:D('2025-02-28'),years:1});
  assert.deepEqual(nextAnniversary(start,D('2025-03-01')),{date:D('2026-02-28'),years:2});
});
test('Calendar ages and end-of-month durations',()=>{
  assert.deepEqual(calendarDuration(D('2000-02-29'),D('2025-02-28')),{years:25,months:0,days:0});
  assert.deepEqual(calendarDuration(D('2026-01-31'),D('2026-02-28')),{years:0,months:1,days:0});
  assert.deepEqual(calendarDuration(D('2026-01-31'),D('2026-03-30')),{years:0,months:1,days:30});
  assert.throws(()=>calendarDuration(D('2026-01-02'),D('2026-01-01')));
});
test('Input validation covers partner, wedding and target',()=>{
  const at=D('2026-10-09'),base={birth:'1996-01-01',start:'2016-01-01'};
  assert.equal(validate(base,at).partner,null);
  for(const patch of [{birth:'2027-01-01'},{start:'2027-01-01'},{start:'1995-01-01'},{partnerBirth:'2017-01-01'},{wedding:'2015-01-01'},{wedding:'2027-01-01'},{target:'2026-02-30'}]) assert.throws(()=>validate({...base,...patch},at));
  assert.equal(validate({...base,partnerBirth:'1994-01-01',wedding:'2020-01-01',target:'2027-01-01'},at).target,D('2027-01-01'));
  assert.equal(validate({...base,target:'2020-01-01'},at).target,D('2020-01-01'));
});
test('Calendar exports are all-day, escape injection and fold UTF-8 lines',()=>{
  const title='Aniversario, tú; yo\\ juntos\nBEGIN:VEVENT '+'á'.repeat(60);
  const ics=makeCalendar(D('2026-12-31'),title);
  assert.ok(ics.includes('DTSTART;VALUE=DATE:20261231'));
  assert.ok(ics.includes('DTEND;VALUE=DATE:20270101'));
  assert.equal(ics.split('\r\nBEGIN:VEVENT').length,2);
  assert.ok(ics.replace(/\r\n /g,'').includes('SUMMARY:Aniversario\\, tú\\; yo\\\\ juntos\\nBEGIN:VEVENT'));
  for(const line of ics.split('\r\n')) assert.ok(new TextEncoder().encode(line).length<=75);
});
test('Today follows local calendar, not UTC date string',()=>{
  const mock={getFullYear:()=>2026,getMonth:()=>9,getDate:()=>10};
  assert.equal(today(mock),D('2026-10-10'));
});
test('Public launch does not load unconfigured advertising',()=>{
  assert.equal(ads.enabled,false); assert.equal(ads.publisher,''); assert.equal(ads.certifiedCmpConfigured,false);
});
