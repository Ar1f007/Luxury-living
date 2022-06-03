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
                  <Container>
                    <Blockquote>
                      <Reviewer>
                        <img
                          src="https://www.hyperui.dev/photos/man-4.jpeg"
                          alt=""
                          className="object-cover w-16 h-16 rounded-full"
                        />

                        <ReviewerInfo>
                          <Name>Jeff Wezos</Name>
                          <Designation>CEO of Shipping Company</Designation>
                        </ReviewerInfo>
                      </Reviewer>

                      <TestimonialText>
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda
                        officiis sit amet itaque eveniet accusantium corporis tempora, soluta
                        perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </TestimonialText>
                    </Blockquote>

                    <Ratings>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </Ratings>
                  </Container>
                </SwiperSlide>
                <SwiperSlide>
                  <Container>
                    <Blockquote>
                      <Reviewer>
                        <img
                          src="https://www.hyperui.dev/photos/man-4.jpeg"
                          alt=""
                          className="object-cover w-16 h-16 rounded-full"
                        />

                        <ReviewerInfo>
                          <Name>Jeff Wezos</Name>
                          <Designation>CEO of Shipping Company</Designation>
                        </ReviewerInfo>
                      </Reviewer>

                      <TestimonialText>
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda
                        officiis sit amet itaque eveniet accusantium corporis tempora, soluta
                        perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </TestimonialText>
                    </Blockquote>

                    <Ratings>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </Ratings>
                  </Container>
                </SwiperSlide>
                <SwiperSlide>
                  <Container>
                    <Blockquote>
                      <Reviewer>
                        <img
                          src="https://www.hyperui.dev/photos/man-4.jpeg"
                          alt=""
                          className="object-cover w-16 h-16 rounded-full"
                        />

                        <ReviewerInfo>
                          <Name>Jeff Wezos</Name>
                          <Designation>CEO of Shipping Company</Designation>
                        </ReviewerInfo>
                      </Reviewer>

                      <TestimonialText>
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda
                        officiis sit amet itaque eveniet accusantium corporis tempora, soluta
                        perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </TestimonialText>
                    </Blockquote>

                    <Ratings>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </Ratings>
                  </Container>
                </SwiperSlide>
                <SwiperSlide>
                  <Container>
                    <Blockquote>
                      <Reviewer>
                        <img
                          src="https://www.hyperui.dev/photos/man-4.jpeg"
                          alt=""
                          className="object-cover w-16 h-16 rounded-full"
                        />

                        <ReviewerInfo>
                          <Name>Jeff Wezos</Name>
                          <Designation>CEO of Shipping Company</Designation>
                        </ReviewerInfo>
                      </Reviewer>

                      <TestimonialText>
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda
                        officiis sit amet itaque eveniet accusantium corporis tempora, soluta
                        perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </TestimonialText>
                    </Blockquote>

                    <Ratings>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </Ratings>
                  </Container>
                </SwiperSlide>
                <SwiperSlide>
                  <Container>
                    <Blockquote>
                      <Reviewer>
                        <img
                          src="https://www.hyperui.dev/photos/man-4.jpeg"
                          alt=""
                          className="object-cover w-16 h-16 rounded-full"
                        />

                        <ReviewerInfo>
                          <Name>Jeff Wezos</Name>
                          <Designation>CEO of Shipping Company</Designation>
                        </ReviewerInfo>
                      </Reviewer>

                      <TestimonialText>
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda
                        officiis sit amet itaque eveniet accusantium corporis tempora, soluta
                        perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </TestimonialText>
                    </Blockquote>

                    <Ratings>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </Ratings>
                  </Container>
                </SwiperSlide>
                <SwiperSlide>
                  <Container>
                    <Blockquote>
                      <Reviewer>
                        <img
                          src="https://www.hyperui.dev/photos/man-4.jpeg"
                          alt=""
                          className="object-cover w-16 h-16 rounded-full"
                        />

                        <ReviewerInfo>
                          <Name>Jeff Wezos</Name>
                          <Designation>CEO of Shipping Company</Designation>
                        </ReviewerInfo>
                      </Reviewer>

                      <TestimonialText>
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda
                        officiis sit amet itaque eveniet accusantium corporis tempora, soluta
                        perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </TestimonialText>
                    </Blockquote>

                    <Ratings>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </Ratings>
                  </Container>
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
const Container = tw.div`bg-[#fff]`;
const Blockquote = tw.blockquote`p-10`;
const Reviewer = tw.div`flex items-center`;
const ReviewerInfo = tw.div`ml-4 text-sm`;
const Name = tw.p`font-medium`;
const Designation = tw.p`mt-1`;
const TestimonialText = tw.p`relative mt-4 text-gray-500`;
const Ratings = tw.div`-mt-4 pb-6 pl-8 flex gap-[2] text-[22px] font-bold text-[#FFAC0C]`;
