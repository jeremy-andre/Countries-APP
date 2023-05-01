import Form from "../../components/Form/Form";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, getActivites } from "../../redux/actions";
import styles from '../Activities/Activities.module.css'

const Activities = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivites());
  }, [dispatch]);

  return (
    <div className={styles.activities}>
      <h3 className={styles.title}>CREATE ACTIVITY</h3>
      <Form />;
    </div>
  );
};

export default Activities;
