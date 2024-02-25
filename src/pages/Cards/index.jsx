import Filler from "../Filler";

const Cards = () => {
    return (
        <section className="py-8 p-4 container mx-auto ">
            <div className="container px-28 py-10">
                <Filler />
            </div>
            <div className="text-lg font-medium text-center text-gray-500">
                <div className="grid md:grid-cols-3 md:gap-3  sm:grid-cols-1 sm:gap-1">
                    <div className="relative rounded-3xl bg-gradient-to-r from-green-800 to-amber-500 m-3">
                        <img className="rounded-3xl opacity-10" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt />
                        <p className="absolute bottom-8 left-5 right-5 text-center text-lg text-white">
                            adsadsadsa sadssm,a.sa hjsa  hjggsahj gsa shg sg sah hsa gsa ga isd f; fjd fsdl hfsd hjd jdh fd fdjnk fd   dfsdfsdf
                        </p>
                    </div>
                    <div className="relative rounded-3xl bg-gradient-to-b from-green-800 to-amber-500 m-3">
                        <img className="rounded-3xl opacity-10" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt />
                        <p className="absolute bottom-8 left-5 right-5 text-center text-lg text-white">
                            adsadsadsa sadssm,a.sa hjsa  hjggsahj gsa shg sg sah hsa gsa ga isd f; fjd fsdl hfsd hjd jdh fd fdjnk fd   dfsdfsdf
                        </p>
                    </div>
                    <div className="relative rounded-3xl  opacity-95 bg-gradient-to-l from-green-800 from-40% to-amber-500  from-0% m-3">
                        <img className="rounded-3xl opacity-10" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt />
                        <p className="absolute bottom-8 left-5 right-5 text-center text-lg text-white">
                            adsadsadsa sadssm,a.sa hjsa  hjggsahj gsa shg sg sah hsa gsa ga isd f; fjd fsdl hfsd hjd jdh fd fdjnk fd   dfsdfsdf
                        </p>
                    </div>
                </div>
            </div>
            <Filler />
        </section>
    );
}

export default Cards;