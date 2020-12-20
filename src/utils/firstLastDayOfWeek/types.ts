export type WeekStart = 'Sunday' | 'Monday';
export interface IGetFirstLastOfWeek {
  weekStart?: WeekStart;
  defaultDate?: Date;
}
