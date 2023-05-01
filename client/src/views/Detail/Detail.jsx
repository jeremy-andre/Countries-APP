import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../redux/actions";
import { useParams } from "react-router-dom";
import styles from '../Detail/Detail.modules.css'
import CardDetail from "../../components/CardDetail/CardDetail";

const Detail = () => {
  const { detailId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry(detailId));
  }, [detailId]);

  return (
    <div className={styles.detail}>
      <CardDetail />
    </div>
  );
};

export default Detail;
