'use client';

import { useState, useEffect, Suspense } from "react";

import PromptCard from "./PromptCard";
import Loading from "@app/loading";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  //TODO 
  // const [searchedResults, setSearchedResults] = useState([]);
  // const [searchTimeout, setSearchTimeout] = useState(null);

  const filterPrompts = (searchtext) => {
   /*  const regex = new RegExp(searchtext, "i"); // case-insensitive
    return allPosts.filter(
      (item) => 
        regex.test(item.creator.username) || 
        regex.test(item.tag) ||
        regex.test(item.prompt)
    ) */
  };
  const handleSearchChange = (e) => {
    // clearTimeout(searchTimeout);
    // setSearchText(e.target.value);
    // setSearchTimeout(setTimeout(() => {
    //   const searchResult = filterPrompts(e.target.value);
    //   setSearchedResults(searchResult);
    // }, 500));
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    };

    setTimeout(() => fetchPosts() , 5000 );
  },[]);
  
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
          type="text" 
          className="search_input peer" 
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>

      <Suspense fallback={<Loading />}>
        <PromptCardList 
          data={posts}
          handleTagClic
          k={() => {}}
        />
      </Suspense>

    </section>
  );
};

export default Feed;