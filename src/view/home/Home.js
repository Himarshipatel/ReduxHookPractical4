import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "./action";
import { Images } from "../../components";
import { Row, Card } from "reactstrap";
import CountUp from "react-countup";

const Home = () => {
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
      <Images />

      {loading ? (
        <div>loading....</div>
      ) : (
        <>
          {stats !== null && (
            <Row className="row">
              <Card className="card1">
                <div className="contentdiv">
                  <h5>Infected</h5>
                  <CountUp
                    className="count"
                    start={0}
                    end={stats.active}
                    duration={2.75}
                    separator=","
                  />
                  <p className="discription">
                    Number of active <br />
                    Cases of Covid-19
                  </p>
                  <div className="color"> h</div>
                </div>
              </Card>
              <Card className="card1">
                <div className="contentdiv">
                  <h5>Recovered</h5>
                  <CountUp
                    className="count"
                    start={0}
                    end={stats.recovered}
                    duration={2.75}
                    separator=","
                  />
                  <p className="discription">
                    Number of recoveries <br />
                    from Covid-19
                  </p>
                  <div className="color1"> h</div>
                </div>
              </Card>
              <Card className="card1">
                <div className="contentdiv">
                  <h5>Deaths</h5>
                  <CountUp
                    className="count"
                    start={0}
                    end={stats.deaths}
                    duration={2.75}
                    separator=","
                  />
                  <p className="discription">
                    Number of deaths caused <br />
                    by Covid-19
                  </p>
                  <div className="color2"> h</div>
                </div>
              </Card>
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default Home;
