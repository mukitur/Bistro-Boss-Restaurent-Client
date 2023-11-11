import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-20 ">
      <SectionTitle heading="featured item" subHeading="Check it out" />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 hero-overlay bg-opacity-60">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 ">
          <p>Aug, 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            ipsam, nemo voluptatibus necessitatibus molestias accusantium ab at
            assumenda iste molestiae fuga, eos accusamus debitis cumque sunt.
            Error quo voluptatibus dolorem necessitatibus doloremque, quis
            dolorum nam quos id hic, velit nihil sint repellat cupiditate
            voluptas unde ipsa quisquam mollitia ullam nobis.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
