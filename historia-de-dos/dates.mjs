// Civil dates represented as UTC day numbers: never mix elapsed time with DST.
export const DAY = 86400000;
export function parseDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value ?? '')) throw new Error('Introduce una fecha válida.');
  const [y, m, d] = value.split('-').map(Number);
  const date = new Date(0);
  date.setUTCFullYear(y, m - 1, d); date.setUTCHours(0, 0, 0, 0);
  if (y < 1900 || y > 9999 || date.getUTCFullYear() !== y || date.getUTCMonth() !== m - 1 || date.getUTCDate() !== d) throw new Error('Introduce una fecha válida (desde 1900).');
  return date.getTime() / DAY;
}
export function iso(day) { return new Date(day * DAY).toISOString().slice(0, 10); }
export function today(now = new Date()) {
  return parseDate(`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`);
}
export function addYears(day, years) {
  const d = new Date(day * DAY), y = d.getUTCFullYear() + years, m = d.getUTCMonth();
  const last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
  return Date.UTC(y, m, Math.min(d.getUTCDate(), last)) / DAY;
}
export function addMonths(day, months) {
  const d = new Date(day * DAY), first = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + months, 1));
  const last = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + 1, 0)).getUTCDate();
  return Date.UTC(first.getUTCFullYear(), first.getUTCMonth(), Math.min(d.getUTCDate(), last)) / DAY;
}
export function calendarDuration(from, to) {
  if (to < from) throw new Error('La fecha final no puede ser anterior a la inicial.');
  const a = new Date(from * DAY), b = new Date(to * DAY);
  let years = b.getUTCFullYear() - a.getUTCFullYear();
  if (addYears(from, years) > to) years--;
  const base = addYears(from, years);
  let months = (b.getUTCFullYear() - new Date(base * DAY).getUTCFullYear()) * 12 + b.getUTCMonth() - new Date(base * DAY).getUTCMonth();
  if (addMonths(base, months) > to) months--;
  return { years, months, days: to - addMonths(base, months) };
}
export function percentage(birth, start, at) {
  if (start < birth || at < start) throw new Error('Las fechas no están en orden.');
  return at === birth ? 100 : (at - start) / (at - birth) * 100;
}
export function percentDate(birth, start, percent) {
  if (start < birth || !Number.isFinite(percent) || percent <= 0 || percent > 100) throw new Error('El porcentaje debe estar entre 0 y 100.');
  if (start === birth) return start;
  if (percent === 100) return null;
  const p = percent / 100;
  // Ceil yields the first whole civil day at or above the requested percentage.
  const raw = (start - p * birth) / (1 - p);
  const result = Math.ceil(raw - 1e-8);
  return result <= parseDate('9999-12-31') ? result : null;
}
export function nextAnniversary(start, at) {
  let years = Math.max(1, new Date(at * DAY).getUTCFullYear() - new Date(start * DAY).getUTCFullYear());
  if (addYears(start, years) < at) years++;
  return { date: addYears(start, years), years };
}
export function validate(values, at = today()) {
  const birth = parseDate(values.birth), start = parseDate(values.start);
  if (birth > at) throw new Error('Tu nacimiento no puede estar en el futuro.');
  if (start > at) throw new Error('El inicio de la relación no puede estar en el futuro.');
  if (start < birth) throw new Error('La relación debe empezar después de tu nacimiento.');
  const partner = values.partnerBirth ? parseDate(values.partnerBirth) : null;
  if (partner !== null && (partner > at || partner > start)) throw new Error('Revisa el nacimiento de tu pareja: debe ser anterior al inicio de la relación.');
  const wedding = values.wedding ? parseDate(values.wedding) : null;
  if (wedding !== null && (wedding < start || wedding > at)) throw new Error('La boda debe estar entre el inicio de la relación y hoy. Para una boda futura, usa la cuenta atrás.');
  const target = values.target ? parseDate(values.target) : null;
  return { birth, start, partner, wedding, target, at };
}
export function makeCalendar(date, title) {
  const escape = text => text.replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');
  const stamp = new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d+Z/,'Z');
  const fold = line => {
    let output = '', bytes = 0;
    for (const char of line) {
      const size = new TextEncoder().encode(char).length;
      if (bytes + size > 75) { output += '\r\n '; bytes = 1; }
      output += char; bytes += size;
    }
    return output;
  };
  return ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Historia de dos//ES','BEGIN:VEVENT',`UID:${iso(date)}-${Date.now()}@historia-de-dos`,`DTSTAMP:${stamp}`,`DTSTART;VALUE=DATE:${iso(date).replace(/-/g,'')}`,`DTEND;VALUE=DATE:${iso(date+1).replace(/-/g,'')}`,`SUMMARY:${escape(title)}`,'END:VEVENT','END:VCALENDAR',''].map(fold).join('\r\n');
}
