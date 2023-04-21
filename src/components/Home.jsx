import { useEffect } from "react";
import { getPostsAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Notizie from "./Notizie";

const Home = () => {
  const dispatch = useDispatch();
  const postsUrl = "https://striveschool-api.herokuapp.com/api/posts/";
  useEffect(() => {
    dispatch(getPostsAction(postsUrl));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const posts = useSelector(state => state.posts.content);
  console.log(posts);

  return (
    <>
      <Notizie posts={posts} />
    </>
  );
};

export default Home;
