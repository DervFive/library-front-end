
const Buttons = () => {
    return (
        <>

            <div className=" btns flex flex-row gap-[10px] justify-start w-full mt-[10px]">
                <button className="py-2 px-4 rounded border border-solid border-[#ff1f1f]">Read Book</button>
                <button className="py-2 px-4 rounded border border-solid border-[#ff1f1f]"><span className="text-white "><i class="fa-solid fa-download"></i></span>Download Book</button>
            </div>

        </>
    )
}

export default Buttons;