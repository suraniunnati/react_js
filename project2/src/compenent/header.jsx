import  "../App.css"
function Header(){
    return(
        <>
        <header class="h-[80px] flex shadow-lg static top-0">
            <div className="logo w-[20%] h-full flex justify-center items-center">
                <img src="https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp" alt="" class="w-[60%]"/>
            </div>
            <div className="courser w-[20%] h-full flex items-center">
                <button class="bg-[#CAD6EE] p-2 rounded-lg w-[150px]">COURSER <i class="fa-solid fa-angle-down"></i></button>
            </div>
            <nav class="w-[60%] h-full flex justify-evenly items-center">
                <li class="font-bold list-none">Scholarship</li>
                <li class="font-bold list-none">Success Stories</li>
                <li class="font-bold list-none">Events</li>
                <li class="font-bold list-none">Hire From Us</li>
                <li class="font-bold list-none">Fees</li>
                <button class="bg-[red] rounded-lg text-white p-2 text-[12px] w-[100px]">REGISTER</button>
            </nav>
        </header>
        <div className="text text-center w-[70%] h-[300px] m-[auto] flex flex-col justify-center">
            <h1 class="font-bold text-[3.5vw]" >The Masai Team</h1>
            <p class="text-[1.4vw]">Behind every successful start-up, there is a seasoned and an experienced team. Unified by a mission to make Masai India’s biggest career focussed higher education institute, the Masai family currently has over 200+ members, with the team getting bigger every week.</p>
        </div>
        </>
    )
}

export default Header