import React from "react";

const useHttp = (requestData) => {
  const [flow, setFlow] = React.useState({
    loading: false,
    status: false,
  });

  const [quotes, setQuotes] = React.useState([]);

  const sendReq = React.useCallback(
    async (object) => {
      setFlow({ loading: true, status: false });
      try {
        const res = await requestData(object);
        setQuotes(res);
        setFlow({ loading: false, status: true });
      } catch (err) {
        setFlow({ loading: false, status: false });
        console.log(err);
      }
    },
    [requestData]
  );

  return {
    sendReq,
    quotes,
    ...flow,
  };
};

export default useHttp;
