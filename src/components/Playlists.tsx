import { Fragment } from "react";
import Playlist from "./Playlist";

export default function Playlists() {
  return (
    <Fragment>
      <h2 className="font-semibosm text-2xl mt-4 ">Feito para Você</h2>

      <div className="grid grid-cols-8 gap-4 mt-4">
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    </Fragment>
  );
}
