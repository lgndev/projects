import { useStats } from "../store/useStats";
import { useState } from "react";

const DamageChart = () => {
  const [setRefresh] = useState(0);
  const stats = useStats((state) => state.stats);
  const BD = stats.BD * stats.BDX;
  const CHD = BD * stats.CHX;
  const WPD = BD * stats.WPX;
  const WPCD = BD * stats.CHX * stats.WPX;
  const magDmg =
    stats.magSize * stats.CHC * stats.CHX +
    (1 - stats.CHC) * stats.magSize * stats.BD;
  const RPS = stats.RPS * stats.RPSX;
  const DPS = magDmg / (stats.magSize / RPS);
  const reload = stats.reload / stats.reloadX;
  const SDPS = magDmg / (stats.magSize / RPS + reload);
  return (
    <div>
      <p>DAMAGE CHART</p>
      <p>BD</p>
      <p>{BD}</p>
      <p>CHD</p>
      <p>{CHD}</p>
      <p>WPD</p>
      <p>{WPD}</p>
      <p>WPCD</p>
      <p>{WPCD}</p>
      <p>DPS</p>
      <p>{DPS}</p>
      <p>SDPS</p>
      <p>{SDPS}</p>
    </div>
  );
};

export default DamageChart;
