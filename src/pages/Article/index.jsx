import React from "react";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ArticlePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="h-[623px] md:px-5 relative w-full">
            <Img
              className="h-[623px] m-auto object-cover w-full"
              src="images/img_rectangle395.png"
              alt="rectangle395"
            />
            <div className="absolute backdrop-opacity-[0.5] bg-black-900_56 blur-[120.00px] bottom-[0] flex flex-col items-start justify-end left-[16%] p-2 w-[51%]">
              <div className="flex flex-col items-start justify-start mb-1.5 mt-[18px] w-[96%] md:w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 tracking-[-0.50px]"
                  size="txtUbuntuBold50"
                >
                  Lorem ipsum
                </Text>
                <Text
                  className="leading-[20.00px] mt-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[-0.25px] w-full"
                  size="txtUbuntuRegular25"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed euismod dui, suscipit posuere felis. Lorem ipsum dolor sit
                  amet,
                </Text>
                <div className="flex flex-row gap-2.5 items-start justify-start mt-6 w-[47%] md:w-full">
                  <div className="bg-blue_gray-100 h-[60px] rounded-[50%] w-[60px]"></div>
                  <div className="flex flex-col items-start justify-start mt-[3px]">
                    <Text
                      className="text-white-A700 text-xl tracking-[-0.20px]"
                      size="txtUbuntuRegular20WhiteA700"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                    <Text
                      className="text-orange-50 text-xl tracking-[-0.20px]"
                      size="txtUbuntuBold20"
                    >
                      16 November 2023
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Header className="absolute flex flex-row inset-x-[0] items-center justify-center mx-auto top-[3%] w-full" />
          </div>
        </div>
        <div className="flex flex-col gap-[27px] items-end mt-[74px] md:px-10 sm:px-5 px-[140px] w-full">
          <Text
            className="leading-[20.00px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[-0.25px] w-[92%] sm:w-full"
            size="txtUbuntuRegular25"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed sed euismod dui, suscipit posuere
            felis. ed euismod dui, suscipit posuere felis. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed sed euismod dui, suscipit
            posuere felis.
          </Text>
          <Text
            className="leading-[20.00px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[-0.25px] w-[92%] sm:w-full"
            size="txtUbuntuRegular25"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed sed euismod dui, suscipit posuere
            felis. ed euismod dui, suscipit posuere felis. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed sed euismod dui, suscipit
            posuere felis.
          </Text>
          <Text
            className="leading-[20.00px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[-0.25px] w-[92%] sm:w-full"
            size="txtUbuntuRegular25"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed sed euismod dui, suscipit posuere
            felis. ed euismod dui, suscipit posuere felis. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed sed euismod dui, suscipit
            posuere felis.
          </Text>
        </div>
        <div className="flex flex-col items-center mt-[198px] w-full">
          <Footer className="bg-gray-900_01 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
