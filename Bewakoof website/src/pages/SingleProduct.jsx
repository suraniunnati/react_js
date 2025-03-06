import { useParams } from 'react-router-dom';
import { addToCart, singleData } from '../redux/ProductReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import info from '../assets/info.png'
import '../App.css'

function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const data = useSelector(store => store.singleProduct)

  console.log(id)

  useEffect(() => {
    singleData(dispatch, id);
  }, [dispatch, id]);

  const cartProduct = () => {
    addToCart(dispatch, data);
};

  function changeimg(thumbnail) {
    document.getElementById("mainImage").src = thumbnail.src;
  }
  function zoomIn(event) {
    const image = event.target;
    image.classList.add("zoom");
  }

  function zoomOut(event) {
    const image = event.target;
    image.classList.remove("zoom");
  }
  function zoomIn(event) {
    const image = event.target;
    const rect = image.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    
    image.style.transformOrigin = `${x}% ${y}%`;
    image.style.transform = "scale(2)";
  }

  function zoomOut(event) {
    const image = event.target;
    image.style.transform = "scale(1)";
  }


  return (
    <div>
      <div className=' w-[80%] m-auto grid grid-cols-2'>
        <div className='flex'>
          <div className='p-2 grid grid-rows-5 h-[630px]'>
            <img src={data.img1} alt="" width={"190px"} className='mt-2' onClick={(e) => changeimg(e.target)}/>
            <img src={data.img2} alt="" width={"190px"} className='mt-3' onClick={(e) => changeimg(e.target)}/>
            <img src={data.img3} alt="" width={"190px"} className='mt-3' onClick={(e) => changeimg(e.target)}/>
            <img src={data.img4} alt="" width={"190px"} className='mt-3' onClick={(e) => changeimg(e.target)}/>
            <img src={data.img5} alt="" width={"190px"} className='mt-3' onClick={(e) => changeimg(e.target)}/>
          </div>
          <div className='p-4 overflow-hidden'>
            <img src={data.img1} alt=""  id='mainImage'  className="transition-transform delay-700 duration-200 ease-in-out" onMouseEnter={zoomIn} onMouseLeave={zoomOut}/>
          </div>
        </div>
        <div className='p-3 h-[630px] overflow-auto'>
          <h1 className='font-bold'>{data.brand}</h1>
          <p className='text-gray-400 text-sm'>{data.title}</p>
          <p className='mt-2'><span className='font-bold text-xl'>₹{data.price}</span>
            <span className='line-through text-[gray] ms-1'>₹{data.MRP}</span>
            <span className='text-green-700 font-bold ms-1'>{data.off}% oFF</span>
          </p>
          <h1><i className="fa-solid fa-star text-sm text-yellow-400"></i><span className='text-sm font-semibold ms-1'>{data.rate} Reviews</span></h1>
          <p className='text-gray-400'>inclusive of all taxes</p>
          <h3 className='mt-3'>Colour : {data.color}</h3>
          <div className='h-[40px] w-[40px] border-4 border-double rounded-full'  style={{ backgroundColor: data.color }}></div>
          <div className='mt-4 border-t'>
            <h1 className='font-medium text-md mt-2'>Select Size</h1>
            <button className='border rounded-lg h-[40px] w-[50px] mt-2'>S</button>
            <button className='border rounded-lg h-[40px] w-[50px] ms-3'>M</button>
            <button className='border rounded-lg h-[40px] w-[50px] ms-3'>L</button>
            <button className='border rounded-lg h-[40px] w-[50px] ms-3'>XL</button>
            <button className='border rounded-lg h-[40px] w-[50px] ms-3'>2XL</button>
            <button className='border rounded-lg h-[40px] w-[50px] ms-3'>3XL</button>
          </div>
          <div className='p-3 h-[50px] bg-[#F6FDFF] flex justify-between items-center mt-3'>
            <p className='text-blue-600 font-medium text-sm'>Couldn't Find Your Size?</p>
            <i class="fa-regular fa-bell"></i>
          </div>
          <div className='mt-3'>
            <button className='bg-[#FFD232] text-center p-3 rounded-lg w-[60%]' onClick={cartProduct}><i class="fa-solid fa-weight-hanging"></i> ADD TO BAG</button>
            <button className='p-3 w-[38%] ms-2 border rounded-lg'><i class="fa-regular fa-heart"></i> WISHLIST</button>
          </div>
          <p className='text-lg p-2 font-normal mt-2'><i class="fa-solid fa-location-dot"></i> Check for Delivery Details</p>
          <input type="text" placeholder='Enter Pincode' className='border rounded-xl p-2 h-[45px] w-full mt-2'/>
          <div className='bg-[#D1EDFF] h-[50px] mt-3 text-sm flex justify-center items-center text-[#1C6C9E]'>
          <i class="fa-solid fa-truck-fast"></i>
              <p>This product is eligible for FREE SHIPPING</p>
          </div>
          <div className=' p-3'>
              <img src={info} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default SingleProduct