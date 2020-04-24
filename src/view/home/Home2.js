import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "./action";
import { Row, Nav, NavItem, NavLink, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Home2 = () => {
  const dispatch = useDispatch();
  const { loading, stats } = useSelector((state) => ({
    loading: state.HomeReducers.loading,
    stats: state.HomeReducers.stats,
  }));

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div>loading....</div>
      ) : (
        <>
          <Container>
            {stats !== null && (
              <Row className="row">
                <ul>
                  {stats.articles.map((article, index) => (
                    <li key={index}>
                      {/* <Nav>
                        <NavItem> */}
                      <a href="#content1" target="if1">
                        {article.source.name}
                      </a>
                      {/* </NavItem>
                      </Nav> */}
                      {/* <div id="content1" class="toggle" style="display:none">{article.description}</div> */}
                    </li>
                  ))}
                </ul>
                {/* <div id="content1" class="toggle"> */}
                <iFrame name="if1">
                  {stats.articles.map((article, index) => (
                    <li key={index}>{article.description}</li>
                  ))}
                </iFrame>
                {/* </div> */}
              </Row>
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default Home2;
