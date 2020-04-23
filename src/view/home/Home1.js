import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCounries } from "./action";
import { Row } from "reactstrap";

const Home1 = () => {
  const dispatch = useDispatch();
  const { loading, stats } = useSelector((state) => ({
    loading: state.HomeReducers.loading,
    stats: state.HomeReducers.stats,
  }));

  useEffect(() => {
    dispatch(fetchCounries());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div>loading....</div>
      ) : (
        <>
          {stats !== null && (
            <Row className="row">
              {stats.map((value, index) => (
                <li key={index}>{value.sources}</li>
              ))}
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default Home1;
