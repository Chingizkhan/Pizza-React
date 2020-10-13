import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className={'pizza-block'}
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="133" cy="120" r="106" />
      <rect x="0" y="245" rx="6" ry="6" width="280" height="30" />
      <rect x="0" y="284" rx="6" ry="6" width="280" height="84" />
      <rect x="24" y="455" rx="0" ry="0" width="0" height="4" />
      <rect x="0" y="390" rx="6" ry="6" width="91" height="31" />
      <rect x="163" y="382" rx="20" ry="20" width="119" height="45" />
    </ContentLoader>
  );
}

export default LoadingBlock;
