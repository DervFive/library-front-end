

const LandingText = () => {
    return (
        <>
            <div className="flex justify-start items-start flex-col bg-[#fd50443a] h-full w-full]">

                <div className="heading w-full text-center ">
                    <h1 className="text-white text-[70px]">Dev<span className="text-[#ff3131]">Shelf</span></h1>
                </div>

                <div className="flex justify-center items-start flex-col gap-[15px] w-1/4 text-white ml-10 mt-[70px]">

                    <h1 className="text-3xl font-bold">Discover a World of Knowledge at Your <span className="text-[#ff3131]  ">Fingertips</span></h1>
                    <p className="text-[15px]">Our eLibrary brings the vast expanse of global knowledge directly to you. From timeless classics to cutting-edge research, explore thousands of titles across every subject and genre.</p>
                    <div className=" btns flex flex-row gap-[10px] justify-start w-full mt-[10px] text-[12px]">
                        <button className="py-2 px-4 rounded  ">Find a Book</button>
                        <button className="py-2 px-4 rounded border border-solid border-[#ff1f1f]">Download<span className="ml-[5px]"><i class="fa-solid fa-download"></i></span> </button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default LandingText;