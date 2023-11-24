import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const DetailHewandilindungiTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-end mx-auto pt-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[170px] items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
            <Header className="flex flex-row items-center justify-center w-full" />
            <Img
              className="h-6 mt-[91px] w-6"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <div className="flex md:flex-col flex-row gap-[22px] items-start justify-between mt-[21px] w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[57%] md:w-full">
                <Img
                  className="h-[463px] sm:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                  src="images/img_pexelsdavidgonzales2656647.png"
                  alt="pexelsdavidgonz"
                />
                <Text
                  className="mt-8 sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.40px]"
                  size="txtUbuntuBold40WhiteA700"
                >
                  Animal Name
                </Text>
                <Text
                  className="mt-2 text-white-A700_9e text-xl tracking-[-0.20px]"
                  size="txtUbuntuBold20WhiteA7009e"
                >
                  lorem ipsum
                </Text>
                <div className="flex flex-row items-start justify-between md:ml-[0] ml-[26px] mt-[46px] w-[45%] md:w-full">
                  <Text
                    className="common-pointer text-white-A700 text-xl tracking-[-0.20px]"
                    size="txtUbuntuLight20WhiteA700"
                    onClick={() => navigate("/detailhewandilindungi")}
                  >
                    Overview
                  </Text>
                  <Text
                    className="text-white-A700 text-xl tracking-[-0.20px]"
                    size="txtUbuntuBold20WhiteA700"
                  >
                    Description
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-[43%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-7 items-center justify-between w-full">
                  <Img
                    className="h-56 md:h-auto object-cover rounded-[12px]"
                    src="images/img_pexelspixabay52530.png"
                    alt="pexelspixabayFiftyTwo"
                  />
                  <Img
                    className="h-56 md:h-auto object-cover rounded-[12px]"
                    src="images/img_pexelspixabay52530.png"
                    alt="pexelspixabayFiftyTwo_One"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-7 items-center justify-between mt-[15px] w-full">
                  <Img
                    className="h-56 md:h-auto object-cover rounded-[12px]"
                    src="images/img_pexelspixabay52530.png"
                    alt="pexelspixabayFiftyTwo_Two"
                  />
                  <Img
                    className="h-56 md:h-auto object-cover rounded-[12px]"
                    src="images/img_pexelspixabay52530.png"
                    alt="pexelspixabayFiftyTwo_Three"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[444px] mt-11 text-white-A700 text-xl tracking-[-0.20px]"
                  size="txtUbuntuBold20WhiteA700"
                >
                  Status
                </Text>
                <Button
                  className="cursor-pointer font-bold min-w-[103px] md:ml-[0] ml-[423px] mt-2.5 rounded-[5px] text-[15px] text-center tracking-[-0.15px]"
                  shape="round"
                  color="red_A700_01"
                  size="sm"
                  variant="fill"
                >
                  Endangered
                </Button>
              </div>
            </div>
            <div className="md:h-5 h-[7px] mt-[13px] relative w-full">
              <Line className="bg-gray-900_02 h-px m-auto w-full" />
              <Line className="absolute bg-gray-800 h-px left-[17%] top-[0] w-[12%]" />
            </div>
            <Text
              className="mt-[25px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[-0.25px]"
              size="txtUbuntuBold25"
            >
              Animal Description
            </Text>
            <Text
              className="leading-[20.00px] mt-[39px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[-0.25px] w-[84%] sm:w-full"
              size="txtUbuntuRegular25"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed sed euismod dui, suscipit posuere
              felis. ed euismod dui, suscipit posuere felis. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed sed euismod dui,
              suscipit posuere felis.
            </Text>
            <Text
              className="leading-[20.00px] mt-[27px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[-0.25px] w-[84%] sm:w-full"
              size="txtUbuntuRegular25"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed sed euismod dui, suscipit posuere
              felis. ed euismod dui, suscipit posuere felis. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed sed euismod dui,
              suscipit posuere felis.
            </Text>
            <Text
              className="leading-[20.00px] mt-[27px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[-0.25px] w-[84%] sm:w-full"
              size="txtUbuntuRegular25"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed sed euismod dui, suscipit posuere
              felis. ed euismod dui, suscipit posuere felis. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed sed euismod dui,
              suscipit posuere felis.
            </Text>
          </div>
          <Footer className="bg-gray-900_01 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DetailHewandilindungiTwoPage;
