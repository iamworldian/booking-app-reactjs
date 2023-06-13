import './HomePage.css';

import Featured from '../Components/Featured/Featured';
import HomePageBanner from '../Components/HomePageBanner/HomePageBanner';
import HomePageHeader from '../Components/HomePageHeader/HomePageHeader';
import HomePageSearchBar from '../Components/HomePageSearchBar/HomePageSearchBar';

export default function HomePage() {
  return (
    <>
      <HomePageHeader />
      <HomePageBanner />
      <HomePageSearchBar />

      <div className="featuredDiv">
        <Featured />
      </div>

      <div className="featuredDiv">
        <Featured />
      </div>
    </>
  );
}
