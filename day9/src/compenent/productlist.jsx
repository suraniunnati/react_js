function Productlist(props) {
    return (
      <div className="border h-[400px] rounded-lg shadow-lg bg-white">
        <div className="h-[50%] flex justify-center p-2">
          <img src={props.data.image} alt={props.data.title} className="h-full" />
        </div>
        <div className="p-3">
          <h2 className="font-bold text-[16px]">{props.data.title}</h2>
          <h2 className="mt-1">{props.data.category}</h2>
          <p className="mt-1">₹ {props.data.price}</p>
          <p className="border flex items-center rounded-full w-[60px] ps-2 mt-1">
            {props.data.rating.rate}
            <i className="fa-solid fa-star text-[12px] ps-1 text-[#ffae00]"></i>
          </p>
        </div>
      </div>
    );
  }
  
  export default Productlist;
  