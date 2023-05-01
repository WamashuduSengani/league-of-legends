import "./App.css";
import { useState } from "react";
import DisplayChampions from "./components/champions/displayAllChampions";
import SearchBar from "./components/championByName/searchBar";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(query: string) {
    setSearchQuery(query);
  }
  return (
    <div className="App">
      <div className="app-bar bg-black text-white py-2 flex justify-center items-center">
        <nav>
          <ul className="flex">
            <li className="mx-4">
              <a
                href="https://www.leagueoflegends.com/en-gb/how-to-play/"
                className="font-bold text-lg tracking-wider uppercase hover:text-gray-300 
              transition-colors duration-200 font-serif"
              >
                GAME
              </a>
            </li>
            <li className="mx-4">
              <a
                href="/champions"
                className="font-bold text-lg tracking-wider uppercase hover:text-gray-300 
              transition-colors duration-200 font-serif"
              >
                CHAMPIONS
              </a>
            </li>
            <li className="mx-4">
              <a
                href="#"
                className="font-bold text-lg tracking-wider uppercase hover:text-gray-300 
              transition-colors duration-200 font-serif"
              >
                NEWS
              </a>
              <ul className="dropdown">
                <li>
                  <a href="https://www.leagueoflegends.com/en-gb/news/">All</a>
                </li>
                <li>
                  <a href="https://www.leagueoflegends.com/en-gb/news/game-updates/">
                    Game Updates
                  </a>
                </li>
                <li>
                  <a href="https://www.leagueoflegends.com/en-gb/news/esports/">
                    Esports
                  </a>
                </li>

                <li>
                  <a href="https://www.leagueoflegends.com/en-gb/news/dev/">
                    Dev
                  </a>
                </li>
                <li>
                  <a href="https://www.leagueoflegends.com/en-gb/news/lore/">
                    Lore
                  </a>
                </li>
                <li>
                  <a href="https://www.leagueoflegends.com/en-gb/news/media/">
                    Media
                  </a>
                </li>
                <li>
                  <a href="https://www.leagueoflegends.com/en-gb/news/merch/">
                    Merch
                  </a>
                </li>
                <li>
                  <a href="https://www.leagueoflegends.com/en-gb/news/community/">
                    Community
                  </a>
                </li>
                <li>
                  <a href="https://www.leagueoflegends.com/en-gb/news/riot-games/">
                    Riot games
                  </a>
                </li>
              </ul>
            </li>
            <li className="mx-4">
              <a
                href="https://www.leagueoflegends.com/en-gb/news/tags/patch-notes/"
                className="font-bold text-lg tracking-wider uppercase hover:text-gray-300 
              transition-colors duration-200 font-serif"
              >
                PATCH NOTES
              </a>
            </li>
            <li className="mx-4">
              <a
                href="#"
                className="font-bold text-lg tracking-wider uppercase hover:text-gray-300 
              transition-colors duration-200 font-serif"
              >
                DISCOVER
              </a>
              <ul className="dropdown">
                <li>
                  <a href="https://displays.riotgames.com/">League Displays</a>
                </li>
                <li>
                  <a href="https://www.leagueoflegends.com/en-gb/news/riot-games/hello-riot-mobile-farewell-league/">
                    Riot Mobile
                  </a>
                </li>
                <li>
                  <a href="https://euw.leagueoflegends.com/">Avatar Creator</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="font-bold text-lg tracking-wider uppercase hover:text-gray-300 transition-colors duration-200 font-serif"
              >
                MORE
              </a>
              <ul className="dropdown">
                <li>
                  <a href="https://universe.leagueoflegends.com/">Universe</a>
                </li>
                <li>
                  <a href="https://merch.riotgames.com/en-gb/">Merch</a>
                </li>
                <li>
                  <a href="https://support.riotgames.com/hc/en-us">Support</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center items-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="bg-gray-100 p-8 rounded-lg mx-auto max-w-7xl">
        <h2 className="text-6xl font-bold mb-4 font-league-newest">
          <span className="inline-block hover:animate-bounce">C</span>
          <span className="inline-block hover:animate-bounce">H</span>
          <span className="inline-block hover:animate-bounce">O</span>
          <span className="inline-block hover:animate-bounce">O</span>
          <span className="inline-block hover:animate-bounce">S</span>
          <span className="inline-block hover:animate-bounce">E</span>
          <span className="inline-block hover:animate-bounce">&nbsp;</span>
          <span className="inline-block hover:animate-bounce">Y</span>
          <span className="inline-block hover:animate-bounce">O</span>
          <span className="inline-block hover:animate-bounce">U</span>
          <span className="inline-block hover:animate-bounce">R</span>
          <span className="inline-block hover:animate-bounce">&nbsp;</span>
          <span className="inline-block hover:animate-bounce">C</span>
          <span className="inline-block hover:animate-bounce">H</span>
          <span className="inline-block hover:animate-bounce">A</span>
          <span className="inline-block hover:animate-bounce">M</span>
          <span className="inline-block hover:animate-bounce">P</span>
          <span className="inline-block hover:animate-bounce">I</span>
          <span className="inline-block hover:animate-bounce">O</span>
          <span className="inline-block hover:animate-bounce">N</span>
        </h2>
        <p className="text-lg font-league3 leading-7">
          With more than 140 champions, you’ll find the perfect match for your
          playstyle. Master one, or master them all.
        </p>
      </div>

      <DisplayChampions searchQuery={searchQuery} />
    </div>
  );
}
