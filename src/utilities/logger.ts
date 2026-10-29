type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const isDev = __DEV__;

const format = (level: LogLevel, tag: string): string => {
  const time = new Date().toISOString().slice(11, 23);
  return `[${time}] [${level.toUpperCase()}] ${tag}`;
};

export const AppLogger = {
  debug: (tag: string, data?: unknown) => {
    if (!isDev) return;
    if (data !== undefined) console.log(format('debug', tag), data);
    else console.log(format('debug', tag));
  },

  info: (tag: string, data?: unknown) => {
    if (!isDev) return;
    if (data !== undefined) console.info(format('info', tag), data);
    else console.info(format('info', tag));
  },

  warn: (tag: string, data?: unknown) => {
    if (data !== undefined) console.warn(format('warn', tag), data);
    else console.warn(format('warn', tag));
  },

  error: (tag: string, data?: unknown) => {
    if (data !== undefined) console.error(format('error', tag), data);
    else console.error(format('error', tag));
  },
};
