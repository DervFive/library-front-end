

const LandingText = () => {
    return (
        <>
            <div className="flex justify-center items-start flex-col gap-[15px] w-1/4 text-white ml-10 ">

                <h1 className="text-3xl font-bold">Discover a World of Knowledge at Your <span className="text-[#ff3131]  ">Fingertips</span></h1>
                <p className="text-[15px]">Our eLibrary brings the vast expanse of global knowledge directly to you. From timeless classics to cutting-edge research, explore thousands of titles across every subject and genre.</p>
                <div className=" btns flex flex-row gap-[10px] justify-start w-full mt-[10px] text-[12px]">
                    <button className="py-2 px-4 rounded  ">Find a Book</button>
                    <button className="py-2 px-4 rounded border border-solid border-[#ff1f1f]">Download<i class="fa-solid fa-download"></i></button>
                </div>

            </div>

        </>
    )
}

export default LandingText;