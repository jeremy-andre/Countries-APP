import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../redux/actions";
import { useParams } from "react-router-dom";

import CardDetail from "../../components/CardDetail/CardDetail";

const Detail = () => {
  const { detailId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry(detailId));
  }, [detailId]);

  return <CardDetail />;
};

export default Detail;
