import { ISneakerBase } from "@/shared/types/sneakers.types";
import { useEffect, useState } from "react";

export const useTotalCoins = (sneakers: ISneakerBase[] | undefined) => {
  const [totalCoins, setTotalCoins] = useState<number>(0);

  useEffect(() => {
    calculateTotalCoins();
  });

  const calculateTotalCoins = () => {
    let calculatedTotalCoins = 0;

    sneakers?.forEach((sneaker) => {
      const coinsFor1000Steps = parseFloat(sneaker.coins_for_1000_steps);
      calculatedTotalCoins += coinsFor1000Steps * 2;
    });

    setTotalCoins(calculatedTotalCoins);
  };

  return totalCoins;
};

