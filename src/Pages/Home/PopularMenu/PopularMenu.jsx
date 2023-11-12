import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === 'popular');
  console.log(popular);
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch('menu.json')
  //     .then((res) => res.json())
  //     .then((data) =>
  //       setMenu(data.filter((item) => item.category === 'popular'))
  //     );
  // }, []);

  return (
    <section className="mb-16">
      <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
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
