import logoImg from "../../assets/logo-nlw-esport.svg";
import { GameBanner } from "../../components/GameBanner";
import { CreateAdBanner } from "../../components/CreateAdBanner";
import { useEffect, useState } from "react";
import api from "../../services/api";
import * as Dialog from "@radix-ui/react-dialog";
import { CreateAdModal } from "../../components/CreateAdModal";

interface IGame {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export const Home: React.FC = () => {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    api.get<IGame[]>("/games").then((res) => setGames(res.data));
  }, []);

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

      <div className="grid grid-cols-6 gap-5 mt-16 w-11/12">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              adsCount={game._count.ads}
              bannerUrl={game.bannerUrl}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
};
