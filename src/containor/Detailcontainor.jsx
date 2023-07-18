import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodo } from "../apis/api";
import Details from "../components/Details";

function Detailcontainor() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await getTodo(id);
      setInfo(response);
    };
    fetchInfo();
  }, [id]);

  if (!info) {
    return <div> 아직 로딩중입니다...</div>;
  }

  return <Details info={info}></Details>;
}

export default Detailcontainor;
