import create from "zustand";

const useRecurrenceStore = create((set) => ({
  recurrencePattern: "",
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
}));

export default useRecurrenceStore;
