import { Injectable } from '@angular/core';

export enum LogLevel {
  DEBUG = 1,
  LOG,
  WARN,
  ERROR
}

export interface Log {
  date: Date;
  level: LogLevel;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogService {

  history: Log[] = [];

  addLog(log: Log): void {
    this.history.unshift(log);
  }
}
