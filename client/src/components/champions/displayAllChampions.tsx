import { useState } from "react";
import { useQuery } from "@apollo/client";
import GET_CHAMPIONS from "../queries/allChampionsQuery";
import "./index.css";
import "../utils/loadingSpinner";
import loadingSpinner from "../utils/loadingSpinner";
import loadingError from "../utils/loadingError";
import searchError from "../utils/invalidSearchError";
import { Champion } from "../types/championType";
import DisplayChampionsProps from "../types/championProps";
import difficultyOptions from "../difficulty/difficultyOptions";
import shuffleArray from "../difficulty/shuffleDifficultyOptions";
import sortChampionsByDifficulty from "../difficulty/sortChampionsByDifficulty";
import { filterChampionByTag } from "../filterByTag/championTagFilter";
import DifficultyOrder from "../types/difficultyOrderEnum";

function DisplayChampions({ searchQuery }: DisplayChampionsProps) {
  const { loading, error, data } = useQuery<{ champions: Champion[] }>(
    GET_CHAMPIONS
  );

  const [selectedTag, setSelectedTag] = useState<string>("");

  const [selectedChampionId, setSelectedChampionId] = useState<string | null>(
    null
  );
  const [difficultyOrder, setDifficultyOrder] = useState<DifficultyOrder>(
    DifficultyOrder.EASY
  );

  if (loading) return loadingSpinner();
  if (error) return loadingError();
  if (!data) return null;

  const handleClick = (championId: string) => {
    setSelectedChampionId(championId);
  };

  const handleBackClick = () => {
    setSelectedChampionId(null);
  };

  const filteredChampions = filterChampionByTag(
    data.champions,
    selectedTag,
    searchQuery
  );

  sortChampionsByDifficulty(filteredChampions, difficultyOrder);

  if (filteredChampions.length === 0) {
    return searchError();
  }

  const selectedChampion = data.champions.find(
    (champion) => champion.id === selectedChampionId
  );

  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag);
  };

  const handleDifficultyOrder = (order: DifficultyOrder) => {
    setDifficultyOrder(order);
  };

  shuffleArray(difficultyOptions);

  return (
    <body className="py-4">
      <div className="max-w-7xl mx-auto my-10">
        <div className="filter-container">
          <button className="btn" onClick={() => handleTagFilter("")}>
            All
          </button>
          <button className="btn" onClick={() => handleTagFilter("Assassin")}>
            Assassins
          </button>
          <button className="btn" onClick={() => handleTagFilter("Fighter")}>
            Fighters
          </button>
          <button className="btn" onClick={() => handleTagFilter("Mage")}>
            Mages
          </button>
          <button className="btn" onClick={() => handleTagFilter("Marksman")}>
            Marksmen
          </button>
          <button className="btn" onClick={() => handleTagFilter("Support")}>
            Supports
          </button>
          <button className="btn" onClick={() => handleTagFilter("Tank")}>
            Tanks
          </button>
          <div className="difficulty-container">
            <select
              className="difficulty-dropdown"
              value={difficultyOrder}
              onChange={(event) =>
                handleDifficultyOrder(parseInt(event.target.value))
              }
            >
              <option value="">All difficulties</option>
              {difficultyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="card-container">
          {selectedChampion ? (
            <>
              <div className="card" key={selectedChampion.id}>
                <img src={selectedChampion.image} alt={selectedChampion.name} />
                <div className="card-content">
                  <h2 className="font-bold font-xxl">
                    {selectedChampion.name}
                  </h2>
                  <p className="font-medium font-lg">
                    {selectedChampion.title}
                  </p>
                </div>
              </div>
              <div className="details">
                <p>{selectedChampion.blurb}</p>
                <h3 className="font-bold font-xl">Combat Abilities:</h3>
                <ul className="info-list">
                  <li>Attack: {selectedChampion.info.attack}</li>
                  <li>Defense: {selectedChampion.info.defense}</li>
                  <li>Magic: {selectedChampion.info.magic}</li>
                  <li>
                    Danger Level:{" "}
                    <span className="danger-level">
                      {selectedChampion.info.difficulty}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="background-button" onClick={handleBackClick}>
                <button className="button">Go Back</button>
              </div>
            </>
          ) : (
            filteredChampions.map((champion) => (
              <div className="card-container" key={champion.id}>
                <button
                  className="card"
                  onClick={() => handleClick(champion.id)}
                >
                  <img src={champion.image} alt={champion.name} />
                  <div className="card-content">
                    <h2 className="font-bold font-xxl">{champion.name}</h2>
                    <p className="font-medium font-lg">{champion.title}</p>
                  </div>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </body>
  );
}

export default DisplayChampions;
