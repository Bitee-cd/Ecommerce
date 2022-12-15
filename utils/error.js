const getError = (err) => {
  err.response && err.response.data && err.response.data.message
    ? err.responsee.data.message
    : err.message;
};
export { getError };
