const initialState = {
  loading: false,
  error: false,
  message: null,
  stats: null,

  countries: {
    loading: false,
    error: false,
    message: null,
    stats: null,
  },

  state: {
    loading: false,
    error: false,
    message: null,
    stats: null,
  },
};

const HomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case "STATS_FETCH_PENDING":
      return {
        ...state,
        loading: true,
        error: false,
        message: null,
        stats: null,
      };
    case "STATS_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        message: null,
        stats: action.stats,
      };
    case "STATS_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
        stats: null,
      };
    case "COUNTRIES_FETCH_PENDING":
      return {
        ...state,
        countries: { loading: true, error: false, message: null, stats: null },
      };
    case "COUNTRIES_FETCH_SUCCESS":
      return {
        ...state,
        countries: {
          loading: false,
          error: false,
          message: null,
          stats: action.stats,
        },
      };
    case "COUNTRIES_FETCH_FAILURE":
      return {
        ...state,
        countries: {
          loading: false,
          error: true,
          message: action.message,
          stats: null,
        },
      };
    default:
      return { ...state };
  }
};
export default HomeReducers;
