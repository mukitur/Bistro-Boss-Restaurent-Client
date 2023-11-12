import TitleHelmet from '../../../Components/TitleHelmet/TitleHelmet';
import Cover from '../../Shared/Cover/Cover';
import orderImg from '../../../assets/Order/banner2.jpg';

const Order = () => {
  return (
    <div>
      <TitleHelmet title="Bistro Boss | Order" />
      <Cover
        title="Order Foods"
        img={orderImg}
        shortdescription="would you like to try a dish?"
      />
      <h2>Order</h2>
    </div>
  );
};

export default Order;
