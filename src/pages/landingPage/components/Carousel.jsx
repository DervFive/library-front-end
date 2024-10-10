import LandingText from "./LandingText";



const Carousel = () => {
    return (
        <div className="carousel h-[calc(100vh-70px)] m-[30px] rounded-[20px] overflow-hidden relative flex items-center justify-center bg-gray-100">

            <div className="list">


                <div className="landing-page w-[180px] h-[250px] rounded-[20px] bg-[url('./src/assets/images/otegha.jpg')] " >

                </div>

                <div className="landing-page w-[180px] h-[250px] rounded-[20px] bg-[url('./src/assets/images/collection.jpg')] ">
                    {/* <LandingText /> */}
                    <LandingText />

                </div>

                <div className="landing-page w-[180px] h-[250px] rounded-[20px] bg-[url('./src/assets/images/janne.jpg')] ">

                </div>

                <div className="landing-page w-[180px] h-[250px] rounded-[20px] bg-[url('./src/assets/images/ikigai.jpg')]">

                </div>

                <div className="landing-page w-[180px] h-[250px] rounded-[20px] bg-[url('./src/assets/images/harry-porter.jpg')] ">


                </div>

                <div className="landing-page w-[180px] h-[250px] rounded-[20px] bg-[url('./src/assets/images/nikita-porter.jpg')] ">

                </div>

                <div className="landing-page w-[180px] h-[250px] rounded-[20px] bg-[url('./src/assets/images/harry-porter.jpg')] ">

                </div>

                <div className="landing-page w-[180px] h-[250px] rounded-[20px] bg-[url('./src/assets/images/harry-porter.jpg')] ">

                </div>

            </div>

            <div className="arrows flex gap-[10px] items-center text-white text-[10px] ">
                <button className="prev"><div><i class="fa-solid fa-chevron-left"></i></div></button>
                <button className="next"><div><i class="fa-solid fa-chevron-right"></i></div></button>

            </div>

            <div className="timeRunning"></div>

            {/* <div className=" flex justify-end bg-red-600/20 h-full rounded-[20px]">

                <div className="flex justify-center items-end  flex-col w-1/4 text-white mr-56 ">
                    <h1 className="text-7xl font-bold">Harry <span className="text-[#ff3131]  ">Porter</span></h1>
                    <p>Descriptions from  the books goes ehere</p>
                    <button className="py-2 px-4 rounded border border-solid border-[#ff1f1f]">Read Book</button>
                </div>

            </div> */}

        </div>
    )
}

export default Carousel;