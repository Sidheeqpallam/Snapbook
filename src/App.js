import "../src/styles/icons/icons.css";
import { useState, useReducer, useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Index";
import Profile from "./pages/profile/Index";
import Home from "./pages/home/Index";
import LoggedIn from "./redirect/LoggedIn";
import NotLoggedInRoutes from "./redirect/NotLoggedInRoutes";
import Activate from "./pages/home/activate";
import Reset from "./pages/reset";
import CreatePostPopup from "./components/createPostPopup";
import axios from "axios";
function reducer(state, action) {
  switch (action.type) {
    case "POSTS_REQUEST":
      return { ...state, loading: true, error: "" };
    case "POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    case "POSTS_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export default function App() {
  const [visible, setVisible] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const [{ loading, error, posts }, dispatch] = useReducer(reducer, {
    loading: false,
    posts: [],
    error: "",
  });
  useEffect(() => {
    getAllPosts();
  }, []);
  const getAllPosts = async () => {
    try {
      dispatch({
        type: "POSTS_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllposts`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch({
        type: "POSTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "POSTS_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  return (
    <>
      {visible && <CreatePostPopup user={user} setVisible={setVisible} />}
      <Routes>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" exact element={<Login />} />
        </Route>

        <Route element={<LoggedIn />}>
          <Route
            path="/"
            exact
            element={<Home setVisible={setVisible} posts={posts} />}
          />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/activate/:token" exact element={<Activate />} />
        </Route>
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </>
  );
}
