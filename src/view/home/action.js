import axios from "axios";

export const fetchCounries = () => {
  return (dispatch) => {
    dispatch({ type: "COUNTRIES_FETCH_PENDING" });

    axios
      .get(
        "https://newsapi.org/v2/sources?apiKey=39e0901ffcc3452faf07ada3c1f7f326"
      )
      .then((res) => {
        dispatch({ type: "COUNTRIES_FETCH_SUCCESS", stats: res.data });
      })
      .catch((error) => {
        dispatch({ type: "COUNTRIES_FETCH_FAILURE", message: error.response });
      });
  };
};

export const fetchStats = () => {
  return (dispatch) => {
    dispatch({ type: "STATS_FETCH_PENDING" });

    axios
      .get("https://corona.lmao.ninja/v2/all")

      .then((res) => {
        dispatch({ type: "STATS_FETCH_SUCCESS", stats: res.data });
      })
      .catch((error) => {
        dispatch({ type: "STATS_FETCH_FAILURE", message: error.response });
      });
  };
};
// export const fetchCounries = () => {
//   return (dispatch) => {
//     dispatch({ type: "COUNTRIES_FETCH_PENDING" });

//     axios
//       .get("https://corona.lmao.ninja/v2/countries/usa")

//       .then((res) => {
//         dispatch({ type: "COUNTRIES_FETCH_SUCCESS", stats: res.data });
//       })
//       .catch((error) => {
//         dispatch({ type: "COUNTRIES_FETCH_FAILURE", message: error.response });
//       });
//   };
// };
