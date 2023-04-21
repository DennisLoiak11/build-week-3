import Form from "react-bootstrap/Form";
import { useState } from "react";
import { HiOutlinePhoto } from "react-icons/hi2";
import { ImNewspaper } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { BsYoutube, BsCalendarDate } from "react-icons/bs";
import { Button } from "react-bootstrap";

const Notizie = props => {
  const [post, setPost] = useState({
    text: ""
  });

  const handleChange = (propertyName, propertyValue) => {
    setPost({
      ...post,
      [propertyName]: propertyValue
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDg4YzE4NmE4NzAwMTQzODY3ZTEiLCJpYXQiOjE2ODE3MjE0ODUsImV4cCI6MTY4MjkzMTA4NX0.YAakfz_XOWE0qUDLpCGsBav_D1Vse921HETnb11Nw4Q"
        }
      });
      if (response.ok) {
        setPost({
          text: ""
        });
      } else {
        alert("errore dell'invio dei dati");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const posts = props.posts;
  return (
    <div className="my-4">
      <div className="section rounded-3 mx-auto p-3 w-50">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4 px-4 mx-auto d-flex">
            <img className="rounded-circle me-3" src="" alt="" width={"45 px"} height={"45 px"} />
            <Form.Control
              type="text"
              value={post.text}
              onChange={e => {
                handleChange("text", e.target.value);
              }}
              className="rounded-pill"
              placeholder="Scrivi un post"
              aria-label="Scrivi un post"
            />
            <Button className="ms-3" variant="primary" type="submit">
              Post
            </Button>
          </Form.Group>
        </Form>

        <div className="d-flex justify-content-around">
          <div className="d-flex">
            <HiOutlinePhoto className="fs-4 text-primary me-2" />
            <p className="text-secondary">Foto</p>
          </div>

          <div className="d-flex">
            <BsYoutube className="fs-4 text-success me-2" />
            <p className="text-secondary">Video</p>
          </div>

          <div className="d-flex">
            <BsCalendarDate className="fs-4 text-orange me-2" />
            <p className="text-secondary">Evento</p>
          </div>

          <div className="d-flex">
            <ImNewspaper className="fs-4 text-danger me-2" />
            <p className="text-secondary">Scrivi un articolo</p>
          </div>
        </div>
      </div>
      <hr className="w-50 mx-auto"></hr>
      {posts.slice(0, 50).map(post => (
        <div className="section w-50 post mx-auto rounded mb-4" key={post._id}>
          <div className="d-flex p-3">
            <div>
              <img className="me-3" src={post.user.image} alt="" width={"40 px"} height={"40 px"} />
            </div>

            <div>
              <h6 className="mb-1">Javascript</h6>
              <p className="text-secondary small mb-0">{post.username} • 3° e oltre</p>
              <p className="text-secondary small">
                {new Date(post.createdAt).toLocaleDateString()} • <IoIosPeople />
              </p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <img className="rounded-bottom" src={post.user.image} alt="" width={"100%"} height={"auto"} />
        </div>
      ))}
    </div>
  );
};

export default Notizie;
