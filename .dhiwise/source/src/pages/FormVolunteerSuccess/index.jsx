import React from "react";

import { Button, Img, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const FormVolunteerSuccessPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-end mx-auto w-full">
        <Header className="flex flex-row items-center justify-center mt-[37px] md:px-5 w-full" />
        <Img
          className="h-[257px] mt-56"
          src="images/img_solarchecklist.svg"
          alt="solarchecklist"
        />
        <Text
          className="mt-[43px] text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 w-[38%] sm:w-full"
          size="txtUbuntuBold36WhiteA700"
        >
          Kami akan menghubungi anda dengan estimasi 3x24 Jam
        </Text>
        <Button
          className="cursor-pointer min-w-[269px] mt-[100px] text-center text-lg tracking-[-0.18px]"
          shape="round"
          color="light_green_800"
          size="lg"
          variant="fill"
        >
          Kembali ke halaman utama
        </Button>
        <Footer1 className="bg-gray-900_01 flex items-center justify-center mt-[597px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default FormVolunteerSuccessPage;
