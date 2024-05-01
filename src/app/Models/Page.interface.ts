export interface Page<T> {
    content: T[]; // Array of items
    totalPages: number; // Total number of pages
    totalElements: number; // Total number of elements
    size: number; // Page size
    number: number; // Current page number
  }