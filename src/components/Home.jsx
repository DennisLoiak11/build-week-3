import { useEffect } from "react";
import { getPostsAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Notizie from "./Notizie";
import { Col, Container, Row } from "react-bootstrap";
import AsideDx1 from "./AsideDx-1";
import AsideSx1 from "./AsideSx-1,";

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
      <Container>
        <Notizie posts={posts} />
      </Container>
    </>
  );
};

export default Home;
