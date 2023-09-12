import { useStats } from "./store/useStats";

import ItemSelect from "./components/ItemSelect";
import DamageChart from "./components/DamageChart";

import { weapons } from "./data/weapons";
import { amulets } from "./data/amulets";
import { rings } from "./data/rings";
import { relicFragments } from "./data/relicFragments";
import { archetypes } from "./data/archetypes";

const App = () => {
  const stats = useStats((state) => state.stats);
  const statsEntries = Object.entries(stats);

  return (
    <>
      <ul>
        {statsEntries.map((entry) => (
          <li key={entry[0]}>{`${entry[0]}: ${entry[1]}`}</li>
        ))}
      </ul>
      <ItemSelect items={weapons} selectLabel="Long Gun" />
      <ItemSelect items={amulets} selectLabel="Amulet" />
      <ItemSelect items={rings} selectLabel="Ring 1" />
      <ItemSelect items={rings} selectLabel="Ring 2" />
      <ItemSelect items={rings} selectLabel="Ring 3" />
      <ItemSelect items={rings} selectLabel="Ring 4" />
      <ItemSelect items={relicFragments} selectLabel="Mythic Relic 1" />
      <ItemSelect items={relicFragments} selectLabel="Mythic Relic 2" />
      <ItemSelect items={relicFragments} selectLabel="Mythic Relic 3" />
      <ItemSelect items={archetypes} selectLabel="Archetype 1" />
      <ItemSelect items={archetypes} selectLabel="Archetype 2" />
      <DamageChart />
    </>
  );
};

export default App;
