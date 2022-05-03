import { useState } from "react";
import HogTile from "./HogTile";

function HogContainer({ hogs }) {
  const [isGreased, setIsGreased] = useState(false);
  const [myHogs, setMyHogs] = useState(hogs);
  const [sortHogs, setSortHogs] = useState(false);

  function handleFilter(e) {
    setIsGreased(!isGreased);
    if (e.target.checked) {
      const filteredHogs = myHogs.filter((hog) => {
        return hog.greased === true;
      });
      setMyHogs(filteredHogs);
    } else setMyHogs(hogs);
  }

  function handleSort(e) {
    setSortHogs(!sortHogs);
    if (e.target.checked) {
      const sortedHogs = myHogs.slice().sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      setMyHogs(sortedHogs);
    } else setMyHogs(hogs);
  }

  return (
    <div>
      <div>
        Only Greased:
        <input onClick={handleFilter} type="checkbox" id="filter"></input>
      </div>
      <div>
        Sort by Name:
        <input onClick={handleSort} type="checkbox" id="sort"></input>
      </div>
      {myHogs.map((hog) => (
        <HogTile key={hog.name} hog={hog} />
      ))}
    </div>
  );
}

export default HogContainer;
