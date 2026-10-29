import { Strings } from '@/utilities/strings';

const MILLISECONDS_PER_MINUTE = 60_000;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

const formatIso = (formatter: Intl.DateTimeFormat, iso: string): string => {
  const time = Date.parse(iso);
  return Number.isNaN(time) ? Strings.dates.unknown : formatter.format(time);
};

export const formatDate = (iso: string): string => formatIso(dateFormatter, iso);

export const formatDateTime = (iso: string): string => formatIso(dateTimeFormatter, iso);

export const formatTimeAgo = (timestamp: number, now: number = Date.now()): string => {
  const minutes = Math.floor((now - timestamp) / MILLISECONDS_PER_MINUTE);
  if (minutes < 1) return Strings.dates.justNow;
  if (minutes < MINUTES_PER_HOUR) return Strings.dates.minutesAgo(minutes);
  const hours = Math.floor(minutes / MINUTES_PER_HOUR);
  if (hours < HOURS_PER_DAY) return Strings.dates.hoursAgo(hours);
  return Strings.dates.onDate(dateFormatter.format(timestamp));
};
