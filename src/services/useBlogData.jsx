import React, { useEffect, useState } from "react";
import sanityClient from "./sanityClient";
import { useParams } from "react-router-dom";

export default function useBlogData() {
  const [data, setData] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
    title,
    slug,
    description,
    title,
    body,
    categories,
    category,
    image{
      asset->{
        _id,
        url
      },
    },
    mainImage{
      asset->{
        _id,
        url
      },
    },
    _createdAt,

    hexCode,
  }`
      )
      .then((data) => setData(data))
      .catch(console.error);
  }, []);
  return data;
}

export const useSinglePostData = () => {
  const [data, setData] = useState();

  const { id } = useParams();
  //   console.log(data);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $id]{
          title,
          slug,
          _createdAt,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,

       }`,
        { id }
      )
      .then((data) => setData(data[0]))
      .catch(console.error);
  }, [id]);
  return data;
};
