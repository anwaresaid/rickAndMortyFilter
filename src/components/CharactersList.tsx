"use client";

import { Suspense } from "react";
import useFiltersStore from "@/store/filtersStore";
import { Characters } from "./Characters";

export default function CharactersList() {
  return (
    <Suspense fallback={<div>Loading characters...</div>}>
      <Characters />
    </Suspense>
  );
}
