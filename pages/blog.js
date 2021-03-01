import { Layout } from "../components/Layout";
import { posts } from "../profile";

const Blog = () => (
  <Layout footer={false} dark={true}>
    <h2>Blog</h2>
    {posts.map(({ title, content, imgUrl }, i) => (
      <div className="row p-2 " key={i}>
        <div className="card post">
          <div className="col-4  flex-start">
            <div className="overflow">
              <img
                src={`${imgUrl}`}
                className="img-fluid card-img-top"
                alt=""
              />
            </div>
          </div>
          <div className="col-8 content">
            <h2 className="titulo">{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    ))}
  </Layout>
);



export default Blog;