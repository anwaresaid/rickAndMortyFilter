"use client";

import { useSearchParams, useRouter } from "next/navigation";
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

export default function CharacterFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { status, gender, setStatus, setGender } = useFiltersStore();

  // Sync URL params to store on component mount and when URL changes
  useEffect(() => {
    const statusParam = (searchParams.get("status") as any) || undefined;
    const genderParam = (searchParams.get("gender") as any) || undefined;

    if (statusParam !== status) setStatus(statusParam);
    if (genderParam !== gender) setGender(genderParam);
  }, [searchParams, setStatus, setGender, status, gender]);

  const handleStatusChange = (value: string) => {
    // Update store
    setStatus(value as any);

    // Update URL
    const params = new URLSearchParams(searchParams);
    params.set("status", value);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleGenderChange = (value: string) => {
    // Update store
    setGender(value as any);

    // Update URL
    const params = new URLSearchParams(searchParams);
    params.set("gender", value);
    router.push(`?${params.toString()}`, { scroll: false });
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
