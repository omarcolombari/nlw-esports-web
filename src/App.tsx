import { MagnifyingGlassPlus } from "phosphor-react";
import React from "react";

import "./styles/main.css";
import logoImg from "./assets/logo-nlw-esport.svg";
import { GameBanner } from "./components/GameBanner";

const App: React.FC = () => {
  return (
    <div className="max-w-[1344] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="NLW eSports" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner
          bannerUrl="/game-1.png"
          title="League of Legends"
          adsCount={1}
        />
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] py-6 px-8 flex justify-between items-center">
          <div>
            <strong className="text-2xl font-black text-white block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 rounded text-white hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
