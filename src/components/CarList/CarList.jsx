import car3 from "../../assets/car3.jpg";
import car4 from "../../assets/car4.jpg";
import car5 from "../../assets/car5.jpg";

const CarsListData = [
    {
        name: "BMW UX",
        price: 100,
        image: car3,
        aosDelay: "0",
    },
    {
        name: "KIA UX",
        price: 100,
        image: car4,
        aosDelay: "500",
    },
    {
        name: "MERCEDES UX",
        price: 100,
        image: car5,
        aosDelay: "1000",
    },
]

const CarList = () => {
    return (
        <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
            <div className="container">
                {/* Heading */}
                <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold font-serif mb-3">Lorem, ipsum dolor.</h1>
                <p data-aos="fade-up" className="text-sm pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatibus?</p>

                {/* Car Listing Cards */}
                <div>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16"
                    >
                        {
                            CarsListData.map((car) => (
                                <div
                                    key={car.name}
                                    data-aos="fade-up" 
                                    data-aos-delay={car.aosDelay} 
                                    className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group">
                                    <div className="w-full h-[120px]">
                                        <img src={car.image} alt="Car Image" className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700"/>
                                    </div>
                                    <div className="space-y-2">
                                        <h1 className="text-primary font-semibold">{car.name}</h1>
                                        <div className="flex justify-between items-center text-xl font-semibold">
                                            <p>${car.price} / Day</p>
                                            <a href="#">Details</a>
                                        </div>
                                    </div>
                                    <p className="text-xl font-semibold absolute top-0 left-3">
                                        50 KM
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="grid place-content-center mt-8">
                    <button className="button-outline" data-aos="fade-up">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
};

export default CarList;