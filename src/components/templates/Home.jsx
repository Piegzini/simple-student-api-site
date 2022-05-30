import React from 'react';
import Banner from '../atoms/Banner';
import QuerySender from '../organisms/QuerySender';

const headerText = 'Try it now!';
function Home() {
  return (
    <>
      <Banner text={headerText} />
      <QuerySender />
    </>
  );
}

export default Home;
