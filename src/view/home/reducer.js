const initialState = {
  loading: false,
  error: false,
  message: null,
  stats: null,

  sources: {
    loading: false,
    error: false,
    message: null,
    statss: null,
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
        sources: {
          loading: true,
          error: false,
          message: null,
          stats: null,
        },
      };
    case "COUNTRIES_FETCH_SUCCESS":
      return {
        ...state,
        sources: {
          loading: false,
          error: false,
          message: null,
          stats: action.stats,
        },
      };
    case "COUNTRIES_FETCH_FAILURE":
      return {
        ...state,
        sources: {
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
