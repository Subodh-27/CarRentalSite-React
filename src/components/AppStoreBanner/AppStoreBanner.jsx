import pattern from "../../assets/backgroundPattern.jpg";
import googlePlay from "../../assets/google_play.png";
import appStore from "../../assets/app_store.png";

const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
}

const AppStoreBanner = () => {
    return (
        <div className="container p-20 dark:bg-dark dark:text-white">
            <div
                className="p-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
                style={bannerImg}
            >
                <div>
                    <div className="space-y-6 max-w-xl mx-auto">
                        <h1 data-aos="fade-up" className="text-2xl text-center sm:text-4xl font-semibold font-serif">Get Started with our App</h1>
                        <p data-aos="fade-up" className="text-center sm:px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ut!</p>
                        <div data-aos="fade-up" className="flex flex-wrap justify-center items-center gap-4">
                            <a href="#">
                                <img src={googlePlay} alt="Google Playstore Image" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                            </a>
                            <a href="#">
                                <img src={appStore} alt="App Store Image" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppStoreBanner;