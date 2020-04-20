import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats, fetchCounries } from "./action";
import { Images } from "../../components";
import {
  Row,
  Card,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import CountUp from "react-countup";
import { Bar } from "react-chartjs-2";

//import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, stats, handleCountryChange } = useSelector((state) => ({
    loading: state.HomeReducers.loading,
    stats: state.HomeReducers.stats,
  }));

  useEffect(() => {
    dispatch(fetchCounries());
    dispatch(fetchStats());
  }, [dispatch]);
  console.log(stats);

  //  handleCountryChange = (e) => {
  //
  //  };

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

              {/* <Form>
                <FormGroup>
                  <Label for="exampleSelect">Select Country</Label>
                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    defaultValue=""
                    onChange={(e) => handleCountryChange(e.target.value)}
                  >
                    <option value="Global">Global</option>
                    {stats.map((country, i) => (
                      <option key={i} value={country}>
                        {country.country}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Form> */}

              <Container className="graph">
                <Bar
                  data={{
                    labels: [
                      "Active",
                      "Cases",
                      "TodayCases",
                      "Recovered",
                      "Deaths",
                    ],
                    // datasets: [
                    //   {
                    //     label: "Covid-19",
                    //     backgroundColor: "rgba(75,192,192,1)",
                    //     borderColor: "rgba(0,0,0,1)",
                    //     borderWidth: 2,
                    //     data: [
                    //       stats.active,
                    //       stats.cases,
                    //       stats.todayCases,
                    //       stats.recovered,
                    //       stats.deaths,
                    //     ],
                    //   },
                    // ],
                    datasets: [
                      {
                        label: "Infected",
                        backgroundColor: [
                          " lightblue",
                          "lightgray",
                          "lightgray",
                          "lightpink",
                          "lightgreen",
                        ],
                        borderWidth: 2,
                        data: [
                          stats.cases,
                          stats.cases,
                          stats.todayCases,
                          stats.recovered,
                          stats.deaths,
                        ],
                      },
                    ],
                  }}
                  options={{
                    title: {
                      display: true,
                      text: "Covid-19 Graph",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </Container>
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default Home;
