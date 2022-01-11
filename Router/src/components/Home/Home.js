import React from "react";
import { useState } from "react";
import MovieAdd from "../AddMovies/AddMovies.js";
import MovieList from "../MovieList.js";

const moviess = [
  {
    id: 1,
    title: "BraveHeart ",
    description: "1995",
    posterURL:
      "https://fr.web.img4.acsta.net/medias/nmedia/18/73/51/89/19209164.jpg",
    rating: "4",
    Trailer: "https://www.youtube.com/embed/nMft5QDOHek",
  },

  {
    id: 2,
    title: "THE IRISHMAN",
    description: "2019",
    posterURL:
      "https://fr.web.img5.acsta.net/pictures/19/09/18/09/17/1349272.jpg",
    rating: "5",
    Trailer: "https://www.youtube.com/embed/RS3aHkkfuEI",
  },
  {
    id: 3,
    title: "JOHN WICK",
    description: "2014",
    posterURL:
      "https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg",
    rating: "3",
    Trailer: "https://www.youtube.com/embed/C0BMx-qxsP4",
  },
  {
    id: 4,
    title: "Pursuit of HAPPYNESS",
    description: "2006",
    posterURL:
      "https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg",
    rating: "2",
    Trailer: "https://www.youtube.com/embed/89Kq8SDyvfg",
  },

  {
    id: 5,
    title: "THE LICNOLIN LAWYER",
    description: "2011",
    posterURL:
      "https://target.scene7.com/is/image/Target/GUEST_8c328657-61a3-41ff-b716-ab726ab0bad4?wid=488&hei=488&fmt=pjpeg",
    rating: "5",
    Trailer: "https://www.youtube.com/embed/IFwE3UgCMIk",
  },
  {
    id: 6,
    title: "Un Homme en COLERE ",
    description: "2021",
    posterURL:
      "https://img.filmsactu.net/datas/films/f/a/fast-furious-hobbs-shaw/xl/fast-furious-hobbs-shaw-605cb870a84a8.jpg",
    rating: "4",
    Trailer: "https://www.youtube.com/embed/Zk2dnNQaXBw",
  },

  {
    id: 7,
    title: "300",
    description: "2009",
    posterURL:
      "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/265576/264202/apiwlnbdz__39557.1625623473.jpg?c=2",
    rating: "3",
    Trailer: "https://www.youtube.com/embed/q5gfx7IMsmM",
  },
];
const Home = () => {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);

  const [movies, setMovies] = useState(moviess);
  return (
    <div>
      <div className="Container">
        <MovieList movies={movies} title={title} rate={rate} />
      </div>
      <MovieAdd movies={movies} setMovies={setMovies} />
    </div>
  );
};

export default Home;
