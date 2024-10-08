import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NOW_PLAYING from "@/assets/rawData/now_playing.json";
import { FilmsService } from "@/services";
import Modal from "../../components/modal";

export const Detail: React.FC = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);
  //const imagePath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  useEffect(() => {
    //console.log(NOW_PLAYING.results)
    //console.log(NOW_PLAYING.results[0])
    FilmsService.getFilmById(2).then((result) => {
      console.log({ result });
    });
  }, []);

  return (
    <div className="container bg-indigo-500">
      {/* 
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={openModal}
      >
        Open Modal from Parent
      </button>
      */}
      <Modal title="Título" message="Mensaje" isOpen={isOpen} closeModal={closeModal} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">A</div>
        <div className="col-span-1">B</div>
      </div>
    </div>
  );
};
