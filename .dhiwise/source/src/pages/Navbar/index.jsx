import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const NavbarPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto p-[74px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-7xl mb-[33px] mx-auto w-full">
          <Img
            className="common-pointer h-[60px] w-[60px]"
            src="images/img_frame382.svg"
            alt="frame382"
            onClick={() => navigate("/")}
          />
          <div className="flex flex-1 sm:flex-col flex-row md:gap-10 gap-[66px] items-center justify-center w-full">
            <Text
              className="common-pointer text-2xl md:text-[22px] text-orange-50 sm:text-xl w-auto"
              size="txtUbuntuRegular24"
              onClick={() => navigate("/listhewandilindungi")}
            >
              LINDUNGI
            </Text>
            <Text
              className="common-pointer text-2xl md:text-[22px] text-orange-50 sm:text-xl w-auto"
              size="txtUbuntuRegular24"
              onClick={() => navigate("/laporan")}
            >
              LAPOR
            </Text>
            <Text
              className="common-pointer text-2xl md:text-[22px] text-orange-50 sm:text-xl w-auto"
              size="txtUbuntuRegular24"
              onClick={() => navigate("/articlelist")}
            >
              ARTIKEL
            </Text>
            <Text
              className="common-pointer text-2xl md:text-[22px] text-orange-50 sm:text-xl w-auto"
              size="txtUbuntuRegular24"
              onClick={() => navigate("/volunteer")}
            >
              Volunteer
            </Text>
          </div>
          <Img
            className="h-[60px] w-[60px]"
            src="images/img_frame382.svg"
            alt="frame383"
          />
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
