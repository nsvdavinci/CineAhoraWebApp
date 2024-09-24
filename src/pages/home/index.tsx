import { Offer1, Offer2, Offer3 } from "@/assets";
import NOW_PLAYING from "@/assets/rawData/now_playing.json";
import UPCOMING from "@/assets/rawData/UPCOMING.json";
import { Card, Carousel } from "@/components";
import { Movie } from "@/models";

const slides = [Offer1, Offer2, Offer3];

const ListOfMovies: React.FC<{
  title: string;
  movies: Movie[];
  className?: string;
}> = ({ title, movies, className }) => {
  return (
    <div className={className}>
      <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
      <div className="flex flex-wrap gap-x-4 gap-y-6 justify-around">
        {movies.map((movie) => {
          const imagePath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
          return <Card image={imagePath} movie={movie} />;
        })}
      </div>
    </div>
  );
};
export const HomePage: React.FC = () => {
  return (
    <div>
      {/* Carousel */}
      <div className="mb-4 flex">
        <Carousel slides={slides} />
      </div>
      {/* Lista de peliculas cartelera */}
      <ListOfMovies
        className="mb-16"
        title="Cartelera"
        movies={NOW_PLAYING.results}
      />
      <ListOfMovies title="Proximamente" movies={UPCOMING.results} />
    </div>
  );
};
