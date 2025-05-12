import Image from "next/image";
function FifthSection() {
    return (
    <div className="max-w-4xl  px-10 lg:px-0 py-12  mx-auto ">
        <h2 id="services" className="text-2xl font-semibold text-center mb-10">Value we offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-[20]">

            <div className=" bg-[#D9D9D9]  ">
                <Image src="/cleanOffice.jpg" alt="" width={330} height={321} className="mx-auto w-full" />
                <p className="py-5 text-center">Office Cleaning (daily, weekly, monthly)</p>
            </div>

            <div className=" bg-[#D9D9D9] ">
                <Image src="/commonArea.jpg" alt="" width={330} height={321} className="mx-auto w-full" />
                <p className="py-5 text-center">Common Areas and Break Rooms</p>
            </div>

            <div className=" bg-[#D9D9D9] ">
                <Image src="/floorCleaning.jpg" alt="" width={330} height={321} className="mx-auto w-full" />
                <p className="py-5 text-center">Floor Care and Carpet Maintenance</p>
            </div>

            <div className=" bg-[#D9D9D9] ">
                <Image src="/cleaningDoor.jpg" alt="" width={330} height={321} className="mx-auto w-full" />
                <p className="py-5 text-center">High-Touch Surface Disinfection  </p>
            </div>

            <div className=" bg-[#D9D9D9] ">
                <Image src="/deepCleaning.jpg" alt="" width={330} height={321} className="mx-auto w-full" />
                <p className="py-5 text-center">Deep Cleaning</p>
            </div>

        </div>

    </div>
    )
}
export default FifthSection;