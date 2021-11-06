import React from "react";
import ContentLoader from "react-content-loader";

function SkeletonBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={456}
      viewBox="0 0 280 456"
      backgroundColor="#e4d7d7"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="322" rx="20" ry="20" width="280" height="60" />
      <circle cx="422" cy="31" r="20" />
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="395" rx="20" ry="20" width="80" height="40" />
      <rect x="140" y="390" rx="20" ry="20" width="130" height="50" />
      <rect x="0" y="280" rx="5" ry="5" width="280" height="30" />
    </ContentLoader>
  );
}

export default SkeletonBlock;
