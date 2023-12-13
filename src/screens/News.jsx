import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Link, useNavigate } from "react-router-dom";
import useBlogData from "../services/useBlogData";
import { monthInWords } from "../utils/utils";

function Team() {
  const blogData = useBlogData();
  const navigate = useNavigate();
  // console.log({ blogData });
  return (
    <>
      <Navbar />

      <div className="news">
        <div className="">
          <h1>
            Article and <br /> <b> News</b>
          </h1>
          <p>
            {" "}
            Explore a world of knowledge with our diverse range of articles that cater to every interest.  <br />
            From tech trends to lifestyle hacks, our content is curated to inform, inspire, and entertain
          </p>
          <div>{/* <input type="text" />  */}</div>
        </div>
        <img
          className="vector01"
          src="./assets/Frame 51562.svg"
          alt="hero img"
        />
        <img className="vector02" src="./assets/vector1.svg" alt="hero img" />
      </div>

      <div className="news-section">
        <h1>Latest Post</h1>
        <div className="phone-section">
              {/* <h1>Our Blog</h1> */}
              <div className="phone-card-section">
                {blogData?.map((data) => {
                    const date = new Date(data?._createdAt);
                    const renderedDate = `
                    ${monthInWords[date.getMonth()]}
                    ${date.getDate()},
                    ${date.getFullYear()}
                    `;
                  return (
                    <div
                    onClick={() => {
                      navigate(`/blog/${data?.slug?.current}`);
                    }}
                    key={data?.slug?.current}
                    className="phone-card"
                  >
                    {" "}
                    <div className="">
                      <img src={data?.mainImage?.asset.url} alt="poddy" />
                      <p> {data?.slug?.current}</p>
                      <h4>{data?.title}</h4>
                      <p>{data?.body?.[0]?.children?.[0]?.text} ...</p>
                      <span />
                      <span />

                      <span> {renderedDate}</span>
                    </div>
                  </div>
                  )
                }
                 
                )}
              </div>
            </div>
      </div>

      <Footer />
    </>
  );
}

export default Team;
