import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCounries } from "./action";
import { Row } from "reactstrap";

const Home3 = () => {
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
              <div id="content1">
                {stats.articles.map((article, index) => (
                  <li key={index}>{article.description}</li>
                ))}
              </div>
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default Home3;
