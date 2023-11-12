import bgimg from '../../../assets/menu/banner3.jpg';

import TitleHelmet from '../../../Components/TitleHelmet/TitleHelmet';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import Cover from '../../Shared/Cover/Cover';

const Menu = () => {
  return (
    <div>
      <TitleHelmet title="Bistro Boss | Menu" />
      <Cover
        img={bgimg}
        title="Our Menu"
        shortdescription="Would you like to try a dish?"
      />
      <PopularMenu />
      <Cover
        img={bgimg}
        title="Our Menu"
        shortdescription="Would you like to try a dish?"
      />
      <PopularMenu />
      <Cover
        img={bgimg}
        title="Our Menu"
        shortdescription="Would you like to try a dish?"
      />
      <PopularMenu />
    </div>
  );
};

export default Menu;
