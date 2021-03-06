import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";

function Loader(props) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  });
  return (
    <div>
      <div className={"row"}>
        <ContentLoader
          className={"col mb-4"}
          width={width}
          height="250"
          speed={2}
          primaryColor="#eef3ef"
          secondaryColor="#ec6052"
        >
          <rect x="0" y="0" rx="5" ry="5" width={width} height="250" />
        </ContentLoader>
      </div>
      <div className={"row"}>
        <ContentLoader
          className={"col"}
          height={160}
          width={500}
          speed={2}
          primaryColor="#eef3ef"
          secondaryColor="#ec6052"
        >
          <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
          <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
          <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
          <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
          <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
          <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
          <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
          <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
          <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
        </ContentLoader>
        <ContentLoader
          className={"col"}
          height={160}
          width={500}
          speed={2}
          primaryColor="#eef3ef"
          secondaryColor="#ec6052"
        >
          <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
          <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
          <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
          <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
          <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
          <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
          <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
          <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
          <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
        </ContentLoader>
      </div>
      <div className={"row"}>
        <ContentLoader
          className={"col"}
          height={160}
          width={500}
          speed={2}
          primaryColor="#eef3ef"
          secondaryColor="#ec6052"
        >
          <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
          <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
          <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
          <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
          <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
          <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
          <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
          <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
          <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
        </ContentLoader>
        <ContentLoader
          className={"col"}
          height={160}
          width={500}
          speed={2}
          primaryColor="#eef3ef"
          secondaryColor="#ec6052"
        >
          <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
          <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
          <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
          <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
          <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
          <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
          <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
          <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
          <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
        </ContentLoader>
      </div>
      <div className={"row"}>
        <ContentLoader
          className={"col"}
          height={160}
          width={500}
          speed={2}
          primaryColor="#eef3ef"
          secondaryColor="#ec6052"
        >
          <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
          <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
          <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
          <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
          <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
          <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
          <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
          <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
          <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
        </ContentLoader>
        <ContentLoader
          className={"col"}
          height={160}
          width={500}
          speed={2}
          primaryColor="#eef3ef"
          secondaryColor="#ec6052"
        >
          <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
          <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
          <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
          <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
          <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
          <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
          <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
          <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
          <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
        </ContentLoader>
      </div>
    </div>
  );
}

export default Loader;
