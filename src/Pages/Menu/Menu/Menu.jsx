import bgimg from '../../../assets/menu/banner3.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import desertImg from '../../../assets/menu/dessert-bg.jpeg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import TitleHelmet from '../../../Components/TitleHelmet/TitleHelmet';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === 'offered');
  const deserts = menu.filter((item) => item.category === 'offered');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const salads = menu.filter((item) => item.category === 'salad');
  const soups = menu.filter((item) => item.category === 'soup');

  return (
    <div>
      <TitleHelmet title="Bistro Boss | Menu" />
      <Cover
        img={bgimg}
        title="Our Menu"
        shortdescription="Would you like to try a dish?"
      />
      {/* Today's offer section */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
      <MenuCategory items={offered} />
      {/* Desert section */}
      <Cover
        img={desertImg}
        title="Deserts"
        shortdescription="Desert Lovers...."
      />
      <MenuCategory items={deserts} />
      {/* Pizza section */}
      <Cover img={pizzaImg} title="Pizza" shortdescription="Pizza Lovers...." />
      <MenuCategory items={pizza} />
      {/* Saladr section */}
      <Cover
        img={saladImg}
        title="Salads"
        shortdescription="Vegeratian Lovers...."
      />
      <MenuCategory items={salads} />
      {/* Soup section */}
      <Cover img={soupImg} title="Soups" shortdescription="Soup Lovers...." />
      <MenuCategory items={soups} />
    </div>
  );
};

export default Menu;
