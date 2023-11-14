import TitleHelmet from '../../../Components/TitleHelmet/TitleHelmet';
import Cover from '../../Shared/Cover/Cover';
import orderImg from '../../../assets/Order/banner2.jpg';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../Shared/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'desert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex); //before it was 0
  const [menu] = useMenu();

  //   console.log(category);

  const drinks = menu.filter((item) => item.category === 'drinks');
  const deserts = menu.filter((item) => item.category === 'offered');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const salads = menu.filter((item) => item.category === 'salad');
  const soups = menu.filter((item) => item.category === 'soup');

  return (
    <div>
      <TitleHelmet title="Bistro Boss | Order" />
      <Cover
        title="Order Foods"
        img={orderImg}
        shortdescription="would you like to try a dish?"
      />
      {/* Tab section start */}
      <div className="flex justify-center my-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>soups</Tab>
            <Tab>Deserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-10">
              {salads.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={deserts} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
