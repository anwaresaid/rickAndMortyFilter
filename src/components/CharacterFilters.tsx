"use client";

import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFiltersStore from "@/store/filtersStore";
import { parseAsString, useQueryState } from "nuqs";

export default function CharacterFilters() {
  // Create query states using nuqs
  const [statusParam, setStatusParam] = useQueryState(
    "status",
    parseAsString.withDefault("")
  );
  const [genderParam, setGenderParam] = useQueryState(
    "gender",
    parseAsString.withDefault("")
  );

  // Get Zustand store values and setters
  const { status, gender, setStatus, setGender } = useFiltersStore();

  // Sync URL params to store when URL changes
  useEffect(() => {
    if (statusParam !== status) setStatus(statusParam as any);
    if (genderParam !== gender) setGender(genderParam as any);
  }, [statusParam, genderParam, setStatus, setGender, status, gender]);

  const handleStatusChange = (value: string) => {
    // Update store
    setStatus(value as any);

    // Update URL with nuqs (no need for manual URL manipulation)
    setStatusParam(value);
  };

  const handleGenderChange = (value: string) => {
    // Update store
    setGender(value as any);

    // Update URL with nuqs
    setGenderParam(value);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Select onValueChange={handleStatusChange} value={status || ""}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="dead">Dead</SelectItem>
            <SelectItem value="alive">Alive</SelectItem>
            <SelectItem value="unknown">Unknown</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={handleGenderChange} value={gender || ""}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="genderless">Genderless</SelectItem>
            <SelectItem value="unknown">Unknown</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
