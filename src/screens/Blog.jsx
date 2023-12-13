import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSinglePostData } from "../services/useBlogData";
import { useNavigate } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../services/sanityClient";
import { monthInWords } from "../utils/utils";
import MetaDecorator from "../utils/MetaDecorator";
import { Helmet } from "react-helmet-async";

function Blog () {
  const blogData = useSinglePostData();
  const navigate = useNavigate();
  // console.log({ blogData, sanityClient });
  const date = new Date(blogData?._createdAt);
  const renderedDate = `
  ${monthInWords[date.getMonth()]}
  ${date.getDate()},
  ${date.getFullYear()}
  `;
  return (
    <>
      <MetaDecorator
        description={blogData?.body?.[0]?.children?.[0]?.text}
        title={blogData?.title}
        imageUrl={blogData?.mainImage?.asset?.url}
        imageAlt={blogData?.title}
      />
      <Helmet>
        <title>Learning React Helmet!</title>
        <meta name='description' content={blogData?.body?.[0]?.children?.[0]?.text} />
      </Helmet>
      <Navbar />

      <div className="">
        <div className="">
          <div>
            {/* <input type="text" />  */}

            <span as="button" onClick={() => navigate(-1)}>
              {" "}
              <img
                src="../assets/Frame 32.svg"
                // src="./assets/Frame 32.svg"
                alt="back"
                style={{ width: "4%", cursor: "pointer" }}
              />{" "}
            </span>
          </div>
        </div>
        <img
          className="vector01"
          src="../assets/Frame 51562.svg"
          // src="./assets/Frame 51562.svg"
          alt="hero img"
          style={{ zIndex: -1, display: "none" }}
        />
        <img
          className="vector02"
          src="../assets/vector1.svg"
          alt="hero img"
          style={{ zIndex: -1 }}
        />
      </div>

      <div className="news-section">
        <div className="blog-card-section">
          <div className="blog-card">
            <img src={blogData?.mainImage?.asset?.url} alt="poddy" />
            <h5> {blogData?.slug?.current}</h5>
            <h4>{blogData?.title}</h4>
            <p>
              <BlockContent
                blocks={blogData?.body}
                projectId={sanityClient?.clientConfig?.projectId}
                dataset={sanityClient?.clientConfig?.dataset}
              />
            </p>
            <span />
            <span />

            <span> {renderedDate}</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
