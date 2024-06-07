
export interface HourRange {
    start: number;
    end: number;
}

export interface HourSettings {
    workingHours: HourRange;
    morning: HourRange;
    evening: HourRange;
    sleeping: HourRange;
}
