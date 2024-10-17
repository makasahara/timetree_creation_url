export interface DataObj {
  [key: string]: string | undefined;
  category: "1";
  title?: string;
  note?: string;
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  allDay?: "0" | "1";
  location?: string;
  url?: string;
}

export type Event = {
  target: {
    id: string;
    value: string;
  }
}

export type HandleChange = (event: Event) => void;