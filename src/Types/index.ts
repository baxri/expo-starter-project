export interface User {
  id?: string;
  email?: string;
  name?: string;
  manager?: boolean;
  deleted?: boolean;
}

export interface Bike {
  id?: string;
  model?: string;
  color?: string;
  location?: string;
  rate?: number;
  available?: string;
  rateResponses: object;
  scores: object;
  createdAt: number;
}

export interface Reservation {
  bike?: Bike | null;
  user?: User | null;
  createdAt: string;
  fromDate?: string;
  toDate?: string;
}
