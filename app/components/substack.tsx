"use client"
import global from "../global"
import { useEffect } from 'react';

const SubstackFeed = () => {
  useEffect(() => {
    window.SubstackFeedWidget = {
      substackUrl: "mashkay.substack.com",
      layout: "right",
      filter:"top",
      posts: 3,
      colors: {
        primary: "#ff0000",
        secondary: "#808080",
        background: "#FFFFFF",
      },
    };

    const script = document.createElement('script');
    script.src = "https://substackapi.com/embeds/feed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="substack-feed-embed"></div>;
};

export default SubstackFeed;