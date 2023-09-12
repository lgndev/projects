import { useState } from "react";
import { useStats } from "../store/useStats";

interface weapon {
  type: "default" | "longGun" | "handgun";
  name: string;
  BD: number;
  RPS: number;
  magSize: number;
  CHC: number;
  WPX: number;
  reload: number;
}

const weaponList: weapon[] = [
  {
    type: "longGun",
    name: "AS-10 Bulldog",
    BD: 60,
    RPS: 2.5,
    magSize: 12,
    CHC: 0.05,
    WPX: 100,
    reload: 1,
  },
  {
    type: "longGun",
    name: "Coach Gun",
    BD: 115,
    RPS: 2.3,
    magSize: 2,
    CHC: 0.05,
    WPX: 100,
    reload: 1,
  },
];

const WeaponSelect = () => {
  const updateStats = useStats((state) => state.updateStats);
  const [prevWeapon, setPrevWeapon] = useState<weapon | undefined>({
    type: "default",
    name: "default",
    BD: 0,
    RPS: 0,
    magSize: 0,
    CHC: 0,
    WPX: 0,
    reload: 0,
  });

  const handleWeaponChange = (e) => {
    // set the newly selected weapon in local state
    const nextWeapon = weaponList.find(
      (weapon) => weapon.name === e.target.value
    );
    setPrevWeapon(nextWeapon);

    // subtract prev weapon stats from next weapong stats
    const mergedObject = {};
    for (const key in nextWeapon) {
      if (
        prevWeapon.hasOwnProperty(key) &&
        typeof prevWeapon[key] === "number"
      ) {
        mergedObject[key] = nextWeapon[key] - prevWeapon[key];
      }
    }
    updateStats(mergedObject);
  };

  return (
    <>
      <label htmlFor="weapon" style={{ display: "block" }}>
        Select Weapon:
      </label>
      <select
        value={prevWeapon.name}
        onChange={(e) => {
          handleWeaponChange(e);
        }}
      >
        <option value="default" disabled>
          ---
        </option>
        {weaponList.map((weapon) => {
          return (
            <option key={weapon.name} value={weapon.name}>
              {weapon.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default WeaponSelect;
