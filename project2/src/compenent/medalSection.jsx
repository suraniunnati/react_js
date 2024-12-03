import { useState } from "react"
function Medalsection(){
    let [arr, setarr] = useState([
        { name1: "Prateek Shukla", post: "Founder & CEO",url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/prateek_6232b84d8b.jpeg" },
        { name1: "Nrupul Dev", post: "Co-Founder & CTO",url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Nrupul_d3fe3b289a.jpg" },
        { name1: "Yogesh Bhat", post: "Co Founder and SVP" ,url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_52e31f5560.jpg"},
        { name1: "Keshav Misra", post: "Senior Vice President",url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/keshav_misra_203a893693.jpeg" },
        { name1: "Ishita Chanana", post: "Senior Vice President - HR",url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/1614198786109_Ishita_Chanana_d3d8c56ab0.jpg" },
        { name1: "Nrupul Dev", post: "Co-Founder & CTO" ,url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/aman_fbbc8625a4.jpg"},
        { name1: "Nrupul Dev", post: "Co-Founder & CTO" ,url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/aman_singhal_500_beb3801ed9.webp"},
        { name1: "Nrupul Dev", post: "Co-Founder & CTO",url:"https://masai-website-images.s3.ap-south-1.amazonaws.com/IMG_2262_Kishore_Acharya_098d2f5a9c.jpg" }
])
    return(
        <div>
        <div className="w-[70%] text-center flex flex-col m-[auto]	">
            <h1 className="md:text-[40px] font-[700] ">Leadership Team</h1>
            <p className="  text-[gray] md:text-[18px] mt-[20px]">
                With more than 70 years of combined experience in technology, engineering and design our Executive Team has one common goal - “Unlock the human potential of India by transforming the education system”

            </p>

        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 w-[90%] ms-[5%] justify-between items-center mt-[50px] p-5">
          {  arr.map((el)=>{
               return <div class="rounded-[20px] h-[300px] text-center text-[white] relative">
                    <img src={el.url} alt=""  class="h-full rounded-3xl w-full" />

                    <div className="a absolute bottom-1 text-center w-full">
                    <h6 class="font-bold text-[1.3vw]">{el.name1}</h6>
                    <p>{el.post}</p>
                    <i class="fa-brands fa-linkedin-in  text-[#1265BF]   text-[19px] "></i>
                    <i class="fa-brands fa-twitter   text-[#1265BF]      text-[19px] ms-[10px] "></i>
                    </div>
                    
                </div>
            })}
           

        </div>
    </div>
    )
}

export default Medalsection