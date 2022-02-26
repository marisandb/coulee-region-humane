import React from 'react';
import PageContent from '../PageContent';
import WhatWeDo from '../WhatWeDo';
import WhoWeAre from '../WhoWeAre';
import OurSuccessStories from '../OurSuccessStories';
import Education from '../Education';
import LandingPage from '../LandingPage';

import { capitalizeFirstLetter } from '../../utils/helpers';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'home':
        return <LandingPage />;
      case 'what we do':
        return <WhatWeDo />;
      case 'who we are':
        return <WhoWeAre />;
      case 'our success stories':
        return <OurSuccessStories />;
      case 'education':
        return <Education />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <section>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;