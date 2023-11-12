import { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then((res) => res.json())
      .then((data) =>
        setMenu(data.filter((item) => item.category === 'popular'))
      );
  }, []);

  return (
    <section className="mb-16">
      <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-8 mx-auto flex ">
        View All Menu
      </button>
    </section>
  );
};

export default PopularMenu;
