import React from "react";
import useGenre from "../Hook/useGenre";

type Props = {};

const GenreList = (props: Props) => {
  const { genres } = useGenre();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
