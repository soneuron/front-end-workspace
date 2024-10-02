import { useParams, useSearchParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [search, setSearch] = useSearchParams();
  const page = search.get("page");
  const keyword = search.get("keyword");
  return (
    <h1>
      Detail {id} Page : {page}, {keyword}
    </h1>
  );
};

export default Detail;
