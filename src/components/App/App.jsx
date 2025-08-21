import { useMemo, useState } from "react";
import Player from "../Player/Player";
import css from "./App.module.css";

function App() {
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query, setQuery] = useState("");
  const [clicks, setClicks] = useState(0);
  const source = "http://media.w3.org/2010/05/sintel/trailer.mp4";

  // const filteredPlanets = planets.filter((planet) => planet.includes(query));
  // Кожного разу, коли змінюється стан clicks, компонент буде оновлено, що призведе до обчислення filteredPlanets, хоча значення planets та query не змінилися! Оскільки метод filter повертає посилання на новий масив, React сприймає це як абсолютно нові дані та список планет буде відображено заново. У такому разі варто мемоізувати обчислення filteredPlanets.

  const filteredPlanets = useMemo(
    () => planets.filter((planet) => planet.includes(query)),
    [planets, query]
  );
  return (
    <div>
      <Player source={source} />
      <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks:{clicks}
      </button>
      <ul>
        {filteredPlanets.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
// Але, більше не означає краще! Не потрібно мемоізувати все поспіль, це може призвести до втрат продуктивності, оскільки мемоізація також займає обчислювальні ресурси. Найчастіше повторні прості обчислення обійдуться дешевше, ніж їхня мемоїзація. Використовуйте useMemo() точково, в першу чергу при роботі з масивами та для дорогих обчислень.
