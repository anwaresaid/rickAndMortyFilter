import { create } from "zustand";

type Status = "alive" | "dead" | "unknown" | undefined;
type Gender = "male" | "female" | "genderless" | "unknown" | undefined;

interface FiltersState {
  status: Status;
  gender: Gender;
  setStatus: (status: Status) => void;
  setGender: (gender: Gender) => void;
}

const useFiltersStore = create<FiltersState>((set) => ({
  status: undefined,
  gender: undefined,
  setStatus: (status) => set({ status }),
  setGender: (gender) => set({ gender }),
}));

export default useFiltersStore;
