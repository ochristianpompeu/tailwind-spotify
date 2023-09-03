import { Fragment } from "react";
import Album from "./Album";

export default function Albuns() {
  return (
    <Fragment>
      <h1 className="font-semibold text-3xl mt-10">Boa noite</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </div>
    </Fragment>
  );
}
