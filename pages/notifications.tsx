import Image from "next/image"
function notifications() {
  return (
    <div className="flex h-screen justify-center items-center ">
        <div className="text-center text-3xl italic text-white-700 font-bold">
            <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt=' '
      />
      <h1 className="">No New Notifications</h1>
        </div>
    </div>
  )
}

export default notifications