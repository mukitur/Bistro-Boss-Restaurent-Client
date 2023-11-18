import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';

const FoodCard = ({ item }) => {
  const { image, price, name, recipe, _id } = item;
  const [, refetch] = useCart();

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = () => {
    // console.log(user.email);
    if (user && user.email) {
      console.log(user.email);
      //send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post('/carts', cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1000,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: 'Please Login for add to cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', location?.pathname);
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className=" ">
        <img src={image} alt="" className="rounded-xl" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-6 mt-4 p-3 rounded-md">
        {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
