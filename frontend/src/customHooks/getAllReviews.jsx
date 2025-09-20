// useGetAllReviews.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { serverUrl } from "../App";
import { setAllReview } from "../redux/reviewSlice";
import axios from "axios";

const useGetAllReviews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const result = await axios.get(serverUrl + "/api/review/allReview", {
          withCredentials: true,
        });
        console.log(result.data);
        dispatch(setAllReview(result.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [dispatch]);
};

export default useGetAllReviews;
