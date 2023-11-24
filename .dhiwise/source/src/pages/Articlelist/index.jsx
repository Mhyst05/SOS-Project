import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ArticlelistPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="h-[619px] mx-auto w-full">
            <Img
              className="h-[619px] m-auto object-cover w-full"
              src="images/img_createabackgo.png"
              alt="createabackgo"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[177px] inset-x-[0] items-center justify-start mx-auto top-[3%] w-[89%]">
              <Header className="flex flex-row items-center justify-center w-full" />
              <div className="backdrop-opacity-[0.5] bg-black-900_6d blur-[120.00px] flex flex-col gap-[19px] items-center justify-start p-7 sm:px-5">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.40px]"
                  size="txtUbuntuBold40WhiteA700"
                >
                  Baca Artikel Hewan Terbaru
                </Text>
                <Text
                  className="mb-[11px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.40px]"
                  size="txtUbuntuBold40WhiteA700"
                >
                  Diwaktu Senggangmu
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 border border-black-900 border-solid flex flex-row sm:gap-10 items-start justify-between mt-[-33px] mx-auto sm:pl-5 pl-[23px] rounded-[10px] w-[51%] z-[1]">
            <Text
              className="mt-[39px] text-base text-black-900_4f tracking-[-0.16px]"
              size="txtUbuntuMedium16"
            >
              Search an article here....
            </Text>
            <Button
              className="border border-black-900 border-solid cursor-pointer font-medium min-w-[159px] rounded-[10px] text-base text-center tracking-[-0.16px]"
              color="light_green_800"
              size="xl"
              variant="fill"
            >
              Search
            </Button>
          </div>
        </div>
        <div className="bg-blue_gray-900_02 flex flex-col items-center justify-start max-w-[1278px] mt-[49px] mx-auto p-7 md:px-5 rounded-[10px] shadow-bs w-full">
          <div
            className="common-pointer flex md:flex-col flex-row md:gap-10 items-start justify-between mb-5 w-[95%] md:w-full"
            onClick={() => navigate("/article")}
          >
            <Img
              className="h-[388px] md:h-auto md:mt-0 mt-[13px] object-cover rounded-[10px]"
              src="images/img_rectangle399.png"
              alt="rectangle399"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-light_green-800 tracking-[-0.50px]"
                size="txtUbuntuBold50Lightgreen800"
              >
                Lorem ipsum
              </Text>
              <Text
                className="leading-[20.00px] mt-[13px] text-white-A700 text-xl tracking-[-0.20px] w-full"
                size="txtUbuntuRegular20WhiteA700"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed sed euismod dui, suscipit
                posuere felis.
              </Text>
              <Text
                className="leading-[20.00px] mt-[17px] text-white-A700 text-xl tracking-[-0.20px] w-full"
                size="txtUbuntuRegular20WhiteA700"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed sed euismod dui, suscipit
                posuere felis.
              </Text>
              <Text
                className="leading-[20.00px] mt-[21px] text-white-A700 text-xl tracking-[-0.20px] w-full"
                size="txtUbuntuRegular20WhiteA700"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed sed euismod dui, suscipit
                posuere felis.
              </Text>
            </div>
          </div>
        </div>
        <div className="md:gap-5 gap-[55px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-7xl min-h-[auto] mt-[42px] mx-auto md:px-5 w-full">
          <div className="h-[428px] relative w-full">
            <Img
              className="common-pointer h-[428px] m-auto object-cover rounded-[20px] w-full"
              src="images/img_davidclodeos.png"
              alt="davidclodeos"
              onClick={() => navigate("/article")}
            />
            <div className="absolute bg-black-900_4c bottom-[0] flex flex-col gap-[5px] inset-x-[0] items-start justify-center mx-auto p-[13px] rounded-bl-[20px] rounded-br-[20px] w-full">
              <div className="h-[35px] md:h-[37px] mt-0.5 relative w-1/2">
                <Text
                  className="m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[-0.30px]"
                  size="txtUbuntuBold30Black900"
                >
                  Lorem ipsum
                </Text>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-orange-50 tracking-[-0.30px] w-max"
                  size="txtUbuntuBold30Orange50"
                >
                  Lorem ipsum
                </Text>
              </div>
              <Text
                className="leading-[20.00px] mb-[11px] text-[15px] text-white-A700 tracking-[-0.15px] w-[99%] sm:w-full"
                size="txtUbuntuRegular15WhiteA700"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed sed euismod dui, suscipit
                posuere felis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed sed euismod dui, suscipit posuere
                felis.......
              </Text>
            </div>
          </div>
          <div className="h-[428px] relative w-full">
            <Img
              className="common-pointer h-[428px] m-auto object-cover rounded-[20px] w-full"
              src="images/img_davidclodeos.png"
              alt="davidclodeos"
              onClick={() => navigate("/article")}
            />
            <div className="absolute bg-black-900_4c bottom-[0] flex flex-col gap-[5px] inset-x-[0] items-start justify-center mx-auto p-[13px] rounded-bl-[20px] rounded-br-[20px] w-full">
              <div className="h-[35px] md:h-[37px] mt-0.5 relative w-1/2">
                <Text
                  className="m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[-0.30px]"
                  size="txtUbuntuBold30Black900"
                >
                  Lorem ipsum
                </Text>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-orange-50 tracking-[-0.30px] w-max"
                  size="txtUbuntuBold30Orange50"
                >
                  Lorem ipsum
                </Text>
              </div>
              <Text
                className="leading-[20.00px] mb-[11px] text-[15px] text-white-A700 tracking-[-0.15px] w-[99%] sm:w-full"
                size="txtUbuntuRegular15WhiteA700"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed sed euismod dui, suscipit
                posuere felis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed sed euismod dui, suscipit posuere
                felis.......
              </Text>
            </div>
          </div>
          <div className="h-[428px] relative w-full">
            <Img
              className="common-pointer h-[428px] m-auto object-cover rounded-[20px] w-full"
              src="images/img_davidclodeos.png"
              alt="davidclodeos"
              onClick={() => navigate("/article")}
            />
            <div className="absolute bg-black-900_4c bottom-[0] flex flex-col gap-[5px] inset-x-[0] items-start justify-center mx-auto p-3 rounded-bl-[20px] rounded-br-[20px] w-full">
              <div className="h-[35px] md:h-[38px] mt-[3px] relative w-[49%]">
                <Text
                  className="m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[-0.30px]"
                  size="txtUbuntuBold30Black900"
                >
                  Lorem ipsum
                </Text>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-orange-50 tracking-[-0.30px] w-max"
                  size="txtUbuntuBold30Orange50"
                >
                  Lorem ipsum
                </Text>
              </div>
              <Text
                className="leading-[20.00px] mb-3 text-[15px] text-white-A700 tracking-[-0.15px] w-[99%] sm:w-full"
                size="txtUbuntuRegular15WhiteA700"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed sed euismod dui, suscipit
                posuere felis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed sed euismod dui, suscipit posuere
                felis.......
              </Text>
            </div>
          </div>
          <div className="h-[428px] relative w-full">
            <Img
              className="common-pointer h-[428px] m-auto object-cover rounded-[20px] w-full"
              src="images/img_davidclodeos.png"
              alt="davidclodeos"
              onClick={() => navigate("/article")}
            />
            <div className="absolute bg-black-900_4c bottom-[0] flex flex-col gap-[5px] inset-x-[0] items-start justify-center mx-auto p-[13px] rounded-bl-[20px] rounded-br-[20px] w-full">
              <div className="h-[35px] md:h-[37px] mt-0.5 relative w-1/2">
                <Text
                  className="m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[-0.30px]"
                  size="txtUbuntuBold30Black900"
                >
                  Lorem ipsum
                </Text>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-orange-50 tracking-[-0.30px] w-max"
                  size="txtUbuntuBold30Orange50"
                >
                  Lorem ipsum
                </Text>
              </div>
              <Text
                className="leading-[20.00px] mb-[11px] text-[15px] text-white-A700 tracking-[-0.15px] w-[99%] sm:w-full"
                size="txtUbuntuRegular15WhiteA700"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed sed euismod dui, suscipit
                posuere felis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed sed euismod dui, suscipit posuere
                felis.......
              </Text>
            </div>
          </div>
          <div className="h-[428px] relative w-full">
            <Img
              className="common-pointer h-[428px] m-auto object-cover rounded-[20px] w-full"
              src="images/img_davidclodeos.png"
              alt="davidclodeos"
              onClick={() => navigate("/article")}
            />
            <div className="absolute bg-black-900_4c bottom-[0] flex flex-col gap-[5px] inset-x-[0] items-start justify-center mx-auto p-[13px] rounded-bl-[20px] rounded-br-[20px] w-full">
              <div className="h-[35px] md:h-[37px] mt-0.5 relative w-1/2">
                <Text
                  className="m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[-0.30px]"
                  size="txtUbuntuBold30Black900"
                >
                  Lorem ipsum
                </Text>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-orange-50 tracking-[-0.30px] w-max"
                  size="txtUbuntuBold30Orange50"
                >
                  Lorem ipsum
                </Text>
              </div>
              <Text
                className="leading-[20.00px] mb-[11px] text-[15px] text-white-A700 tracking-[-0.15px] w-[99%] sm:w-full"
                size="txtUbuntuRegular15WhiteA700"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed sed euismod dui, suscipit
                posuere felis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed sed euismod dui, suscipit posuere
                felis.......
              </Text>
            </div>
          </div>
          <div className="h-[428px] relative w-full">
            <Img
              className="common-pointer h-[428px] m-auto object-cover rounded-[20px] w-full"
              src="images/img_davidclodeos.png"
              alt="davidclodeos"
              onClick={() => navigate("/article")}
            />
            <div className="absolute bg-black-900_4c bottom-[0] flex flex-col gap-[5px] inset-x-[0] items-start justify-center mx-auto p-3 rounded-bl-[20px] rounded-br-[20px] w-full">
              <div className="h-[35px] md:h-[38px] mt-[3px] relative w-[49%]">
                <Text
                  className="m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[-0.30px]"
                  size="txtUbuntuBold30Black900"
                >
                  Lorem ipsum
                </Text>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-orange-50 tracking-[-0.30px] w-max"
                  size="txtUbuntuBold30Orange50"
                >
                  Lorem ipsum
                </Text>
              </div>
              <Text
                className="leading-[20.00px] mb-3 text-[15px] text-white-A700 tracking-[-0.15px] w-[99%] sm:w-full"
                size="txtUbuntuRegular15WhiteA700"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed sed euismod dui, suscipit
                posuere felis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed sed euismod dui, suscipit posuere
                felis.......
              </Text>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900_01 flex items-center justify-center mt-[149px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ArticlelistPage;
