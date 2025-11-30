export const monthNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export interface Toast {
  id: string;
  message: string;
  leaving: boolean;
  gone: boolean;
}
