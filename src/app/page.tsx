import CharacterFilters from "@/components/CharacterFilters";
import { Characters } from "@/components/Characters";
import ClientComponentWrapper from "@/components/ClientComponentWrapper";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ClientComponentWrapper>
        <CharacterFilters />
      </ClientComponentWrapper>
      <Characters />
    </div>
  );
}
