import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import VolunteerStackrectangle596One from "components/VolunteerStackrectangle596One";

import { handleSectionNavigation } from "utils";

const VolunteerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <div className="h-[500px] md:px-5 relative w-full">
          <Img
            className="h-[500px] m-auto object-cover w-full"
            src="images/img_rectangle270.png"
            alt="rectangle270"
          />
          <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[8%] w-[89%]">
            <Header className="flex flex-row items-center justify-center w-full" />
            <Text
              className="md:ml-[0] ml-[490px] mt-[125px] sm:text-[32px] md:text-[38px] text-[42px] text-orange-50"
              size="txtUbuntuBold42"
            >
              Animals Need You
            </Text>
            <Text
              className="md:ml-[0] ml-[281px] mt-6 text-orange-50 text-xl"
              size="txtUbuntuBold20"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </div>
        </div>
        <div className="h-[1000px] md:h-[1259px] sm:h-[895px] md:px-5 relative w-full">
          <div className="absolute bg-gray-900_01 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[121px] md:px-10 sm:px-5 top-[0] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[193px] w-[94%] md:w-full">
              <div className="flex flex-col items-start justify-start">
                <Text className="text-lg text-orange-50" size="txtUbuntuBold18">
                  13 November 2023
                </Text>
                <Text
                  className="mt-[38px] md:text-3xl sm:text-[28px] text-[32px] text-deep_orange-800"
                  size="txtUbuntuBold32Deeporange800"
                >
                  Taman Nasional Ujung Kulon
                </Text>
                <Text
                  className="leading-[25.00px] mt-2 text-lg text-orange-50 tracking-[-0.18px] w-full"
                  size="txtUbuntuRegular18"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </>
                </Text>
                <Button
                  className="common-pointer cursor-pointer min-w-[175px] mt-[22px] text-center text-lg tracking-[-0.18px]"
                  onClick={() => {
                    handleSectionNavigation("block1");
                  }}
                  shape="round"
                  color="light_green_800"
                  size="lg"
                  variant="fill"
                >
                  Volunteer Now
                </Button>
              </div>
              <Img
                className="h-[460px] md:h-auto object-cover rounded-[20px]"
                src="images/img_rectangle386.png"
                alt="rectangle386"
              />
            </div>
          </div>
          <div className="absolute bg-deep_orange-300 bottom-[0] md:h-[259px] h-[260px] inset-x-[0] mx-auto rounded-[20px] w-[21%]">
            <div className="flex flex-col h-full items-center justify-start m-auto w-[87%]">
              <div className="bg-orange-50 h-[60px] w-[60px]"></div>
              <Text
                className="mt-5 text-orange-50 text-xl tracking-[-0.20px]"
                size="txtUbuntuBold20"
              >
                Lorem Ipsum{" "}
              </Text>
              <Text
                className="leading-[20.00px] mt-4 text-[15px] text-center text-orange-50 tracking-[-0.15px] w-full"
                size="txtUbuntuBold15"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Text>
            </div>
            <VolunteerStackrectangle596One className="absolute bg-deep_orange-300 md:h-[259px] h-[260px] inset-[0] justify-center m-auto rounded-[20px] w-full" />
          </div>
        </div>
        <Text
          className="mt-[103px] text-4xl sm:text-[32px] md:text-[34px] text-center text-deep_orange-800 tracking-[-0.36px]"
          size="txtUbuntuBold36Deeporange800"
          id="block1"
        >
          Explore your Volunteer
        </Text>
        <Text
          className="mt-[13px] text-center text-white-A700 text-xl tracking-[-0.20px]"
          size="txtUbuntuBold20WhiteA700"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </Text>
        <div className="flex flex-col items-center justify-start max-w-[1118px] mt-[70px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:gap-5 gap-[52px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="h-[440px] relative w-full">
                <Img
                  className="h-[440px] m-auto object-cover rounded-[20px] w-full"
                  src="images/img_rectangle313.png"
                  alt="rectangle313"
                />
                <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[22px] sm:px-5 rounded-bl-[20px] rounded-br-[20px] w-full">
                  <div className="bg-white-A700 h-[13px] md:ml-[0] ml-[5px] mt-1.5 w-[70%]"></div>
                  <div className="bg-white-A700 h-3 md:ml-[0] ml-[5px] mt-3 w-[33%]"></div>
                  <div className="bg-white-A700 h-[7px] md:ml-[0] ml-[5px] mt-[27px] w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] md:ml-[0] ml-[5px] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] md:ml-[0] ml-[5px] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] md:ml-[0] ml-[5px] mt-3 w-[88%]"></div>
                  <Button
                    className="common-pointer cursor-pointer font-medium h-12 md:ml-[0] ml-[5px] mt-3.5 text-center text-sm tracking-[-0.14px] w-[136px]"
                    onClick={() => navigate("/detailvolunteer")}
                    shape="round"
                    color="light_green_800"
                    size="md"
                    variant="fill"
                  >
                    Apply now
                  </Button>
                </div>
              </div>
              <div className="h-[440px] relative w-full">
                <Img
                  className="h-[440px] m-auto object-cover rounded-[20px] w-full"
                  src="images/img_rectangle313.png"
                  alt="rectangle313"
                />
                <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[22px] sm:px-5 rounded-bl-[20px] rounded-br-[20px] w-full">
                  <div className="bg-white-A700 h-[13px] ml-1.5 md:ml-[0] mt-1.5 w-[70%]"></div>
                  <div className="bg-white-A700 h-3 ml-1.5 md:ml-[0] mt-3 w-[33%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-[27px] w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <Button
                    className="common-pointer cursor-pointer font-medium h-12 md:ml-[0] ml-[5px] mt-3.5 text-center text-sm tracking-[-0.14px] w-[136px]"
                    onClick={() => navigate("/detailvolunteer")}
                    shape="round"
                    color="light_green_800"
                    size="md"
                    variant="fill"
                  >
                    Apply now
                  </Button>
                </div>
              </div>
              <div className="h-[440px] relative w-full">
                <Img
                  className="h-[440px] m-auto object-cover rounded-[20px] w-full"
                  src="images/img_rectangle313.png"
                  alt="rectangle313"
                />
                <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[22px] sm:px-5 rounded-bl-[20px] rounded-br-[20px] w-full">
                  <div className="bg-white-A700 h-[13px] ml-1.5 md:ml-[0] mt-1.5 w-[70%]"></div>
                  <div className="bg-white-A700 h-3 ml-1.5 md:ml-[0] mt-3 w-[33%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-[27px] w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <Button
                    className="common-pointer cursor-pointer font-medium h-12 md:ml-[0] ml-[5px] mt-3.5 text-center text-sm tracking-[-0.14px] w-[136px]"
                    onClick={() => navigate("/detailvolunteer")}
                    shape="round"
                    color="light_green_800"
                    size="md"
                    variant="fill"
                  >
                    Apply now
                  </Button>
                </div>
              </div>
              <div className="h-[440px] relative w-full">
                <Img
                  className="h-[440px] m-auto object-cover rounded-[20px] w-full"
                  src="images/img_rectangle313.png"
                  alt="rectangle313"
                />
                <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[22px] sm:px-5 rounded-bl-[20px] rounded-br-[20px] w-full">
                  <div className="bg-white-A700 h-[13px] ml-1.5 md:ml-[0] mt-1.5 w-[70%]"></div>
                  <div className="bg-white-A700 h-3 ml-1.5 md:ml-[0] mt-3 w-[33%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-[27px] w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <Button
                    className="common-pointer cursor-pointer font-medium h-12 md:ml-[0] ml-[5px] mt-3.5 text-center text-sm tracking-[-0.14px] w-[136px]"
                    onClick={() => navigate("/detailvolunteer")}
                    shape="round"
                    color="light_green_800"
                    size="md"
                    variant="fill"
                  >
                    Apply now
                  </Button>
                </div>
              </div>
              <div className="h-[440px] relative w-full">
                <Img
                  className="h-[440px] m-auto object-cover rounded-[20px] w-full"
                  src="images/img_rectangle313.png"
                  alt="rectangle313"
                />
                <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[22px] sm:px-5 rounded-bl-[20px] rounded-br-[20px] w-full">
                  <div className="bg-white-A700 h-[13px] ml-1.5 md:ml-[0] mt-1.5 w-[70%]"></div>
                  <div className="bg-white-A700 h-3 ml-1.5 md:ml-[0] mt-3 w-[33%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-[27px] w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <Button
                    className="common-pointer cursor-pointer font-medium h-12 md:ml-[0] ml-[5px] mt-3.5 text-center text-sm tracking-[-0.14px] w-[136px]"
                    onClick={() => navigate("/detailvolunteer")}
                    shape="round"
                    color="light_green_800"
                    size="md"
                    variant="fill"
                  >
                    Apply now
                  </Button>
                </div>
              </div>
              <div className="h-[440px] relative w-full">
                <Img
                  className="h-[440px] m-auto object-cover rounded-[20px] w-full"
                  src="images/img_rectangle313.png"
                  alt="rectangle313"
                />
                <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[22px] sm:px-5 rounded-bl-[20px] rounded-br-[20px] w-full">
                  <div className="bg-white-A700 h-[13px] ml-1.5 md:ml-[0] mt-1.5 w-[70%]"></div>
                  <div className="bg-white-A700 h-3 ml-1.5 md:ml-[0] mt-3 w-[33%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-[27px] w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <Button
                    className="common-pointer cursor-pointer font-medium h-12 md:ml-[0] ml-[5px] mt-3.5 text-center text-sm tracking-[-0.14px] w-[136px]"
                    onClick={() => navigate("/detailvolunteer")}
                    shape="round"
                    color="light_green_800"
                    size="md"
                    variant="fill"
                  >
                    Apply now
                  </Button>
                </div>
              </div>
              <div className="h-[440px] relative w-full">
                <Img
                  className="h-[440px] m-auto object-cover rounded-[20px] w-full"
                  src="images/img_rectangle313.png"
                  alt="rectangle313"
                />
                <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[22px] sm:px-5 rounded-bl-[20px] rounded-br-[20px] w-full">
                  <div className="bg-white-A700 h-[13px] ml-1.5 md:ml-[0] mt-1.5 w-[70%]"></div>
                  <div className="bg-white-A700 h-3 ml-1.5 md:ml-[0] mt-3 w-[33%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-[27px] w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <Button
                    className="common-pointer cursor-pointer font-medium h-12 md:ml-[0] ml-[5px] mt-3.5 text-center text-sm tracking-[-0.14px] w-[136px]"
                    onClick={() => navigate("/detailvolunteer")}
                    shape="round"
                    color="light_green_800"
                    size="md"
                    variant="fill"
                  >
                    Apply now
                  </Button>
                </div>
              </div>
              <div className="h-[440px] relative w-full">
                <Img
                  className="h-[440px] m-auto object-cover rounded-[20px] w-full"
                  src="images/img_rectangle313.png"
                  alt="rectangle313"
                />
                <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[22px] sm:px-5 rounded-bl-[20px] rounded-br-[20px] w-full">
                  <div className="bg-white-A700 h-[13px] ml-1.5 md:ml-[0] mt-1.5 w-[70%]"></div>
                  <div className="bg-white-A700 h-3 ml-1.5 md:ml-[0] mt-3 w-[33%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-[27px] w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <Button
                    className="common-pointer cursor-pointer font-medium h-12 md:ml-[0] ml-[5px] mt-3.5 text-center text-sm tracking-[-0.14px] w-[136px]"
                    onClick={() => navigate("/detailvolunteer")}
                    shape="round"
                    color="light_green_800"
                    size="md"
                    variant="fill"
                  >
                    Apply now
                  </Button>
                </div>
              </div>
              <div className="h-[440px] relative w-full">
                <Img
                  className="h-[440px] m-auto object-cover rounded-[20px] w-full"
                  src="images/img_rectangle313.png"
                  alt="rectangle313"
                />
                <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[22px] sm:px-5 rounded-bl-[20px] rounded-br-[20px] w-full">
                  <div className="bg-white-A700 h-[13px] ml-1.5 md:ml-[0] mt-1.5 w-[70%]"></div>
                  <div className="bg-white-A700 h-3 ml-1.5 md:ml-[0] mt-3 w-[33%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-[27px] w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <div className="bg-white-A700 h-[7px] ml-1.5 md:ml-[0] mt-3 w-[88%]"></div>
                  <Button
                    className="common-pointer cursor-pointer font-medium h-12 md:ml-[0] ml-[5px] mt-3.5 text-center text-sm tracking-[-0.14px] w-[136px]"
                    onClick={() => navigate("/detailvolunteer")}
                    shape="round"
                    color="light_green_800"
                    size="md"
                    variant="fill"
                  >
                    Apply now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900_01 flex items-center justify-center mt-[113px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default VolunteerPage;
