import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const tinggiOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LaporanPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="h-[594px] md:px-5 relative w-full">
            <Img
              className="h-[594px] m-auto object-cover w-full"
              src="images/img_aarmedhunter.png"
              alt="aarmedhunter"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[76px] inset-x-[0] items-center justify-start mx-auto top-[3%] w-[89%]">
              <Header className="flex flex-row items-center justify-center w-full" />
              <div className="backdrop-opacity-[0.5] bg-black-900_6d blur-[120.00px] flex flex-col gap-[7px] items-center justify-start p-11 md:px-10 sm:px-5">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-orange-50 tracking-[-0.40px]"
                  size="txtUbuntuBold40"
                >
                  Form Pengaduan
                </Text>
                <Text
                  className="mb-[17px] text-orange-50 text-shadow-ts text-xl tracking-[-0.20px]"
                  size="txtUbuntuBold20"
                >
                  Isi form dengan benar dan bukan laporan fiktif
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[311px] mt-[47px] text-white-A700 text-xl"
          size="txtUbuntuBold20WhiteA700"
        >
          Nama Pelapor
        </Text>
        <div className="flex flex-col items-center mt-[18px] md:px-10 sm:px-5 px-[311px] w-full">
          <Input
            name="rectangle563"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="border border-blue_gray-900_01 border-solid flex h-[55px] w-full"
            shape="round"
          ></Input>
        </div>
        <Text
          className="md:ml-[0] ml-[311px] mt-[57px] text-white-A700 text-xl"
          size="txtUbuntuBold20WhiteA700"
        >
          Prioritas
        </Text>
        <SelectBox
          className="border border-blue_gray-900_01 border-solid font-bold leading-[normal] md:ml-[0] ml-[311px] mr-[995px] mt-5 text-[15px] text-left w-[10%] sm:w-full"
          placeholderClassName="text-black-900"
          indicator={
            <Img
              className="h-[5px] mr-[0] w-2.5"
              src="images/img_vector_light_green_800_5x10.svg"
              alt="Vector"
            />
          }
          isMulti={false}
          name="groupEight"
          options={tinggiOptionsList}
          isSearchable={false}
          placeholder="Tinggi"
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        />
        <Text
          className="md:ml-[0] ml-[311px] mt-[59px] text-white-A700 text-xl"
          size="txtUbuntuBold20WhiteA700"
        >
          Tempat Kejadian
        </Text>
        <div className="flex flex-col items-center mt-[18px] md:px-10 sm:px-5 px-[311px] w-full">
          <Input
            name="groupTen"
            placeholder="Isi disini...."
            className="font-bold leading-[normal] p-0 placeholder:text-black-900_6d text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-900_01 border-solid w-full"
            shape="round"
            size="sm"
          ></Input>
        </div>
        <Text
          className="md:ml-[0] ml-[311px] mt-10 text-white-A700 text-xl"
          size="txtUbuntuBold20WhiteA700"
        >
          Ciri-ciri pelaku (Nama pelaku jika tahu)
        </Text>
        <div className="flex flex-col items-center mt-[18px] md:px-10 sm:px-5 px-[311px] w-full">
          <Input
            name="groupNine"
            placeholder="Isi disini...."
            className="font-bold leading-[normal] p-0 placeholder:text-black-900_6d text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-900_01 border-solid w-full"
            shape="round"
            size="sm"
          ></Input>
        </div>
        <Text
          className="md:ml-[0] ml-[311px] mt-10 text-white-A700 text-xl"
          size="txtUbuntuBold20WhiteA700"
        >
          Deskripsi kejadian
        </Text>
        <div className="flex flex-col items-center mt-[18px] w-full">
          <div className="bg-white-A700 border border-blue_gray-900_01 border-solid h-[232px] md:px-5 rounded-[5px] w-[57%]"></div>
          <Button
            className="common-pointer cursor-pointer min-w-[198px] mt-[98px] rounded-[29px] text-center text-xl tracking-[-0.20px]"
            onClick={() => navigate("/")}
            color="light_green_800"
            size="md"
            variant="fill"
          >
            Submit
          </Button>
          <Footer1 className="bg-gray-900_01 flex items-center justify-center mt-[220px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LaporanPage;
