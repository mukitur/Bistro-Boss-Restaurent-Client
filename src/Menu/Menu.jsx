import TitleHelmet from '../Components/TitleHelmet/TitleHelmet';
import Cover from '../Pages/Shared/Cover/Cover';
import bgimg from '../assets/menu/banner3.jpg';
import PopularMenu from '../Pages/Home/PopularMenu/PopularMenu';

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
