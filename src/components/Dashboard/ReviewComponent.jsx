import { useState } from "react";
import { useEffect } from "react";

const ReviewComponent = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      ).then((res) => res.json());
      setComments(data);
    };
    fetchComments();
  }, []);

  return (
    <div className="flex flex-col">
      {comments.slice(0, 10).map((comment) => (
        <div key={comment.id} className="bg-white p-2 rounded-xl">
          <h4>{comment.name}</h4>
          <span>{comment.email}</span>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewComponent;
