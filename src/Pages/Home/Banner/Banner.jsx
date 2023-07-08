import bannerImg1 from '../../../assets/Images/banner1.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Banner = () => {
    return (
        <section className="py-10">
            <div className="container">
                <Swiper className="mySwiper">
                    <SwiperSlide className='md:flex gap-5 flex-row-reverse justify-between items-center'>
                        <div><img src={bannerImg1} alt="" /></div>
                        <div className="w-1/2">
                            <h1 className="text-5xl font-bold mb-3">
                                Welcome to <span className="text-primary">ElectroAmbition</span>.
                            </h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ab cum eveniet omnis aut, facere quia vero porro, magni exercitationem, velit facilis cumque mollitia voluptas distinctio unde veritatis non tempora. Nisi iusto numquam nesciunt temporibus?
                            </p>
                            <p className="uppercase font-semibold mt-3">
                                We ready to sever you.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex gap-5 flex-row-reverse justify-between items-center'>
                        <div><img src={bannerImg1} alt="" /></div>
                        <div className="w-1/2">
                            <h1 className="text-5xl font-bold mb-3">
                                Welcome to <span className="text-primary">ElectroAmbition</span>.
                            </h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ab cum eveniet omnis aut, facere quia vero porro, magni exercitationem, velit facilis cumque mollitia voluptas distinctio unde veritatis non tempora. Nisi iusto numquam nesciunt temporibus?
                            </p>
                            <p className="uppercase font-semibold mt-3">
                                We ready to sever you.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex gap-5 flex-row-reverse justify-between items-center'>
                        <div><img src={bannerImg1} alt="" /></div>
                        <div className="w-1/2">
                            <h1 className="text-5xl font-bold mb-3">
                                Welcome to <span className="text-primary">ElectroAmbition</span>.
                            </h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ab cum eveniet omnis aut, facere quia vero porro, magni exercitationem, velit facilis cumque mollitia voluptas distinctio unde veritatis non tempora. Nisi iusto numquam nesciunt temporibus?
                            </p>
                            <p className="uppercase font-semibold mt-3">
                                We ready to sever you.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Banner;