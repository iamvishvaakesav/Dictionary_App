import React from "react";
import { ReactComponent as PlayButton } from "../../assets/play.svg";
import "./Display.css";
import handlePlay from "./handlePlay";
function Display({ dictResponse }) {
  return (
    <div>
      <DisplayHeader></DisplayHeader>
      {dictResponse.meanings.map((meaning) => {
        return <DisplayContent key={Math.random()} meaning={meaning} />;
      })}
      <DisplayFooter></DisplayFooter>
    </div>
  );

  function DisplayHeader() {
    return (
      <div className="termContainer">
        <div className="termWrapper">
          <h1 className="term">{dictResponse.word}</h1>
          <p className="termPronounce">{dictResponse.phonetic}</p>
        </div>
        <a
          className=" playIconWrapper"
          onClick={() => {
            handlePlay(dictResponse.phonetics);
          }}
        >
          <PlayButton className="playIcon"></PlayButton>
        </a>
      </div>
    );
  }

  function DisplayContent({ meaning }) {
    return (
      <div className="contentContainer">
        <div className="contentHeader">
          <p className="content">{meaning.partOfSpeech}</p>
          <div className="horizontalBar"></div>
        </div>
        <p className="meaning">Meaning</p>
        <div className="meaningContent">
          <ul>
            {meaning.definitions.map((element) => {
              return (
                <li key={Math.random()} className="definition">
                  {element.definition}
                </li>
              );
            })}
          </ul>
        </div>
        {meaning.synonyms.length > 0 && (
          <div className="sunonymsContainer">
            <p className="synonyms">Synonyms</p>
            <div className="synonymsList">
              {meaning.synonyms.map((synonym) => {
                return (
                  <div
                    key={synonym}
                    className="synonymItem"
                  >{`${synonym}`}</div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
  function DisplayFooter() {
    return (
      <>
        <div className="horizontalBar"></div>
        <div className="footerContainer">
          <p className="source">source</p>
          <a className="sourceUrl">{dictResponse.sourceUrls[0]}</a>
        </div>
      </>
    );
  }
}

export default Display;
