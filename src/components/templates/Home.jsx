import React from 'react';
import Banner from '../atoms/Banner/Banner';
import ApiQueryPreview from '../organisms/ApiQueryPreview/ApiQueryPreview';

const headerText = 'Try it now!';
function Home() {
  return (
    <>
      <Banner text={headerText} />
      <ApiQueryPreview />
    </>
  );
}

export default Home;
