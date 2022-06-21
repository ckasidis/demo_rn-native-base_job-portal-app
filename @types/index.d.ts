/* eslint-disable */

interface Salary {
  pay: number;
  cycle: '/ hour' | '/ day' | '/ week' | '/ month' | '/ shift' | null;
}

interface JobListing {
  id: number;
  title: string;
  featured: boolean;
  location: string;
  company: string;
  postedDate: string;
  salary: Salary;
  saved: boolean;
}
