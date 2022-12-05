import React, { useState, useEffect } from "react";
import MicroPostCard from "../components/MicroPostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";

function PostsListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

   /*useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let response = await fetch("/api/micro_posts");
        let allPosts = await response.json();
        setPosts(allPosts);
        setLoading(false);
      } catch (error) {
        <div id="postError">
        console.error("Error fetching all micro_posts", error);
        setError(true);
        </div>
      }
    }

    getData();

    return () => {
      // clean up function
    };
  }, []);

  if (error) return <ErrorAlert details="Failed to fetch all micro posts" />;
  if (loading) return <LoadingSpinner />;*/

  let demoposts = [{content:"post #1 demo", createdAt:2, id:1 },
  {content:"post #2 demo", createdAt:2, id:2 }, {content:"post #3 demo", createdAt:2, id:3 } ];

  let [count,setClick] = useState(0);

  return (
    <div className="container-fluid text-center">
      <div className="row justify-content-center">
        <div className="feedTitle">
        {/*<h1>Your Post Feed</h1>*/}
        </div>
        
        <div className="row">
          <div className="col-2">
            fnfjnjnfnfencvjinvcjsdnjdnf
          </div>
          <div className="col-8">
          {demoposts/*posts*/.map((entryData) => (
          <MicroPostCard {...entryData} key={entryData.id} />
        ))}
          </div>
          <div className="col-2">
            cdcdjfbdjbdsndnfnfnfknfkonfon
          </div>

        </div>
       
        
      </div>

      

    </div>
  );
}

export default PostsListPage;
