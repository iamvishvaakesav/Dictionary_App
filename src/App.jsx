import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Search from "./components/Search/Search";
import Display from "./components/Display/Display";
import "./App";

function App() {
  const [dictResponse, setDictResponse] = useState({
    word: "serendipity",
    phonetic: "/ˌsɛ.ɹən.ˈdɪ.pɪ.ti/",
    phonetics: [
      {
        text: "/ˌsɛ.ɹən.ˈdɪ.pɪ.ti/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/serendipity-au.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=75857831",
        license: {
          name: "BY-SA 4.0",
          url: "https://creativecommons.org/licenses/by-sa/4.0",
        },
      },
      {
        text: "/ˌsɛ.ɹən.ˈdɪ.pɪ.ti/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/serendipity-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=965947",
        license: {
          name: "BY-SA 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0",
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "A combination of events which have come together by chance to make a surprisingly good or wonderful outcome.",
            synonyms: [],
            antonyms: ["Murphy's law", "perfect storm"],
          },
          {
            definition:
              "An unsought, unintended, and/or unexpected, but fortunate, discovery and/or learning experience that happens by accident.",
            synonyms: ["chance", "luck"],
            antonyms: [],
          },
        ],
        synonyms: ["chance", "luck"],
        antonyms: ["Murphy's law", "perfect storm"],
      },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: ["https://en.wiktionary.org/wiki/serendipity"],
  });
  return (
    <div className="container">
      <Navbar></Navbar>
      <Search
        dictResponse={dictResponse}
        setDictResponse={setDictResponse}
      ></Search>
      <Display
        dictResponse={dictResponse}
        setDictResponse={setDictResponse}
      ></Display>
    </div>
  );
}

export default App;
