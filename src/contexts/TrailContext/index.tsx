import { createContext, useState } from "react";

import { TrailData } from "@/services/kaguya/types";

type TrailContextData = {
  trail: TrailData | undefined;
  setTrailData: React.Dispatch<React.SetStateAction<TrailData | undefined>>;
};

interface TrailProviderProps {
  children: React.ReactNode;
}

export const TrailContext = createContext({} as TrailContextData);

export function TrailProvider({ children }: TrailProviderProps) {
  const [trail, setTrailData] = useState<TrailData | undefined>(
    {} as TrailData
  );

  return (
    <TrailContext.Provider
      value={{
        trail,
        setTrailData,
      }}
    >
      {children}
    </TrailContext.Provider>
  );
}
