export const errorHandler = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
      case 403:
        return `Error: ${
          (error.response.data?.error && error.response.data?.error?.[0])
          || error.message
        }`;
      default:
        // eslint-disable-next-line no-case-declarations
        const err = error.response.data;
        if (Array.isArray(err)) {
          return `Error: ${err[0]}`;
        }
        return `Error: ${err}`;
    }
  } else if (error.request) {
    return `Error: ${error.message}`;
  } else {
    return `Error: ${error.message}`;
  }
};
