import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Star = ({ star }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className="text-red-600">
      {star >= index + 1 ? (
        <BsStarFill />
      ) : star >= index + 0.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
    </span>
  ));

  return <div className="flex gap-1">{ratingStar}</div>;
};

export default Star;
