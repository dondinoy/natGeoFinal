import { useParams } from "react-router-dom";

 

const Article = () => {

const { id } = useParams();
  //parse the number as an int:
  const idNum = parseInt(id ?? "");
  //if parse fails - we get NaN *not-a-number*
  if (isNaN(idNum)) {
    throw new Error("id must be a number!");
  }
  return (

    <div>
      <h2>Article</h2>
      <p>{id}</p>
    </div>
  );
};

export default Article;