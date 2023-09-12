import { create } from "zustand";

export const useStats = create((set, get) => ({
  stats: {
    BD: 0,
    BDX: 1,
    CHD: 0,
    WPD: 0,
    CHC: 0,
    CHX: 1.5,
    WPX: 1,
    RPS: 0,
    RPSX: 1,
    magSize: 0,
    reload: 0,
    reloadX: 1,
  },
  updateStats: (prevItem, nextItem) =>
    set((state) => {
      const stats = get().stats;
      const statsCpy = { ...stats };

      if (prevItem.name === "initial") {
        for (const key in nextItem) {
          if (stats.hasOwnProperty(key) && typeof nextItem[key] === "number") {
            statsCpy[key] = statsCpy[key] + nextItem[key];
          }
        }
        return {
          stats: {
            ...statsCpy,
          },
        };
      } else {
        for (const key in prevItem) {
          if (
            statsCpy.hasOwnProperty(key) &&
            typeof prevItem[key] === "number"
          ) {
            statsCpy[key] = statsCpy[key] - prevItem[key];
          }
        }

        for (const key in nextItem) {
          if (
            statsCpy.hasOwnProperty(key) &&
            typeof nextItem[key] === "number"
          ) {
            statsCpy[key] = statsCpy[key] + nextItem[key];
          }
        }

        return {
          stats: {
            ...statsCpy,
          },
        };
      }
    }),
}));
