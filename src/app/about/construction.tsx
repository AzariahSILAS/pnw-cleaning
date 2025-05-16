import Image from "next/image"
function Construction() {
    return(
        <div className=" w-full space-y-4 max-w-lg mx-auto  p-4 border rounded-md shadow-md bg-white">
            <Image src="/construction.png" alt="page under construction icon" width={300} height={300} className="mx-auto" />
            <h2 className="text-2xl font-semibold text-center">Sorry page is under Construction!</h2>
        </div>
    )
}
export default Construction;