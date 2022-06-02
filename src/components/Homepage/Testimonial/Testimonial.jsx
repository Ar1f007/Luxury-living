import tw from 'twin.macro';
import { Heading } from '../../../components';
import { AiFillStar } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

export const Testimonial = () => {
  return (
    <Wrapper>
      <Heading heading="Testimonial" />

      <section>
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <Swiper
                modules={[Pagination, A11y, Autoplay]}
                spaceBetween={8}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  640: {
                    centeredSlides: true,
                    slidesPerView: 1.25,
                  },

                  1024: {
                    centeredSlides: false,
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide bg-[#fff]">
                    <blockquote className="p-8">
                      <div className="flex items-center">
                        <img
                          src="https://www.hyperui.dev/photos/man-4.jpeg"
                          alt=""
                          className="object-cover w-16 h-16 rounded-full"
                        />

                        <div className="ml-4 text-sm">
                          <p className="font-medium">Jeff Wezos</p>
                          <p className="mt-1">CEO of Shipping Company</p>
                        </div>
                      </div>

                      <p className="relative mt-4 text-gray-500">
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda
                        officiis sit amet itaque eveniet accusantium corporis tempora, soluta
                        perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </p>
                    </blockquote>

                    <div class="-mt-4 pb-6 pl-8 flex gap-.8 text-[22px] font-bold text-[#FFAC0C]">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide bg-[#fff]">
                    <blockquote className="p-8">
                      <div className="flex items-center">
                        <img
                          src="https://www.hyperui.dev/photos/man-4.jpeg"
                          alt=""
                          className="object-cover w-16 h-16 rounded-full"
                        />

                        <div className="ml-4 text-sm">
                          <p className="font-medium">Jeff Wezos</p>
                          <p className="mt-1">CEO of Shipping Company</p>
                        </div>
                      </div>

                      <p className="relative mt-4 text-gray-500">
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda
                        officiis sit amet itaque eveniet accusantium corporis tempora, soluta
                        perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </p>
                    </blockquote>

                    <div class="-mt-4 pb-6 pl-8 flex gap-.8 text-[22px] font-bold text-[#FFAC0C]">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide bg-[#fff]">
                    <blockquote className="p-8">
                      <div className="flex items-center">
                        <img
                          src="https://www.hyperui.dev/photos/man-4.jpeg"
                          alt=""
                          className="object-cover w-16 h-16 rounded-full"
                        />

                        <div className="ml-4 text-sm">
                          <p className="font-medium">Jeff Wezos</p>
                          <p className="mt-1">CEO of Shipping Company</p>
                        </div>
                      </div>

                      <p className="relative mt-4 text-gray-500">
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda
                        officiis sit amet itaque eveniet accusantium corporis tempora, soluta
                        perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </p>
                    </blockquote>

                    <div class="-mt-4 pb-6 pl-8 flex gap-.8 text-[22px] font-bold text-[#FFAC0C]">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide bg-[#fff]">
                    <blockquote className="p-8">
                      <div className="flex items-center">
                        <img
                          src="https://www.hyperui.dev/photos/man-4.jpeg"
                          alt=""
                          className="object-cover w-16 h-16 rounded-full"
                        />

                        <div className="ml-4 text-sm">
                          <p className="font-medium">Jeff Wezos</p>
                          <p className="mt-1">CEO of Shipping Company</p>
                        </div>
                      </div>

                      <p className="relative mt-4 text-gray-500">
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda
                        officiis sit amet itaque eveniet accusantium corporis tempora, soluta
                        perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </p>
                    </blockquote>

                    <div class="-mt-4 pb-6 pl-8 flex gap-.8 text-[22px] font-bold text-[#FFAC0C]">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide bg-[#fff]">
                    <blockquote className="p-8">
                      <div className="flex items-center">
                        <img
                          src="https://www.hyperui.dev/photos/man-4.jpeg"
                          alt=""
                          className="object-cover w-16 h-16 rounded-full"
                        />

                        <div className="ml-4 text-sm">
                          <p className="font-medium">Jeff Wezos</p>
                          <p className="mt-1">CEO of Shipping Company</p>
                        </div>
                      </div>

                      <p className="relative mt-4 text-gray-500">
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda
                        officiis sit amet itaque eveniet accusantium corporis tempora, soluta
                        perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </p>
                    </blockquote>

                    <div class="-mt-4 pb-6 pl-8 flex gap-.8 text-[22px] font-bold text-[#FFAC0C]">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = tw.section`
bg-[#fcf9f9] mt-16 xl:mt-28 py-16
`;
