import { useEffect, useState } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((res) => {
        setState({
          ...state,
          loading: false,
          data: res,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loading: false,
          error: err,
        });
      });
  }, [trigger]);
  return { ...state, refetch: setTrigger };
};
export default useAxios;
