import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const mahasiswaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const priaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FormVolunteerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="h-[595px] md:px-5 relative w-full">
            <Img
              className="h-[595px] m-auto object-cover w-full"
              src="images/img_createimageof.png"
              alt="createimageof"
            />
            <div className="absolute flex flex-col gap-[58px] inset-x-[0] items-center justify-start mx-auto top-[6%] w-[89%]">
              <Header className="flex flex-row items-center justify-center w-full" />
              <div className="backdrop-opacity-[0.5] bg-black-900_6d blur-[120.00px] flex flex-col items-center justify-start p-10 sm:px-5">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-orange-50 tracking-[-0.40px]"
                  size="txtUbuntuBold40"
                >
                  Form Pendaftaran
                </Text>
                <Text
                  className="my-[3px] sm:text-4xl md:text-[38px] text-[40px] text-orange-50 tracking-[-0.40px]"
                  size="txtUbuntuBold40"
                >
                  Volunteer
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[311px] mt-[45px] text-white-A700 text-xl"
            size="txtUbuntuBold20WhiteA700"
          >
            Nama
          </Text>
          <Input
            name="rectangle563"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="border border-blue_gray-900_01 border-solid flex h-[55px] mt-[19px] mx-auto w-[57%]"
            shape="round"
          ></Input>
          <Text
            className="md:ml-[0] ml-[311px] mt-[45px] text-white-A700 text-xl"
            size="txtUbuntuBold20WhiteA700"
          >
            Email
          </Text>
          <Input
            name="groupNinetyNine"
            placeholder="Isi disini...."
            className="font-bold leading-[normal] p-0 placeholder:text-black-900_6d text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-900_01 border-solid mt-5 mx-auto w-[57%]"
            shape="round"
            size="sm"
          ></Input>
          <Text
            className="md:ml-[0] ml-[311px] mt-11 text-white-A700 text-xl"
            size="txtUbuntuBold20WhiteA700"
          >
            No. Telp
          </Text>
          <Input
            name="groupNinetyEight"
            placeholder="Isi disini...."
            className="font-bold leading-[normal] p-0 placeholder:text-black-900_6d text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-900_01 border-solid mt-[18px] mx-auto w-[57%]"
            shape="round"
            size="sm"
          ></Input>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[311px] mt-[45px] md:px-5 w-[47%] md:w-full">
            <Text
              className="text-white-A700 text-xl"
              size="txtUbuntuBold20WhiteA700"
            >
              Status
            </Text>
            <Text
              className="md:ml-[0] ml-[233px] text-white-A700 text-xl"
              size="txtUbuntuBold20WhiteA700"
            >
              Jenis kelamin
            </Text>
            <Text
              className="md:ml-[0] ml-[190px] text-white-A700 text-xl"
              size="txtUbuntuBold20WhiteA700"
            >
              Umur
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[311px] mt-[19px] md:px-5 w-[53%] md:w-full">
            <SelectBox
              className="border border-blue_gray-900_01 border-solid font-bold leading-[normal] text-[15px] text-left w-[18%] md:w-full"
              placeholderClassName="text-black-900"
              indicator={
                <Img
                  className="h-[5px] mr-[0] w-2.5"
                  src="images/img_vector_light_green_800_5x10.svg"
                  alt="Vector"
                />
              }
              isMulti={false}
              name="groupNinetySix"
              options={mahasiswaOptionsList}
              isSearchable={false}
              placeholder="Mahasiswa"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            />
            <SelectBox
              className="border border-blue_gray-900_01 border-solid font-bold leading-[normal] md:ml-[0] ml-[161px] text-[15px] text-left w-[18%] md:w-full"
              placeholderClassName="text-black-900"
              indicator={
                <Img
                  className="h-[5px] mr-[0] w-2.5"
                  src="images/img_vector_light_green_800_5x10.svg"
                  alt="Vector"
                />
              }
              isMulti={false}
              name="groupNinetyFive"
              options={priaOptionsList}
              isSearchable={false}
              placeholder="Pria"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            />
            <SelectBox
              className="border border-blue_gray-900_01 border-solid font-bold leading-[normal] md:ml-[0] ml-[186px] text-[15px] text-left w-[18%] md:w-full"
              placeholderClassName="text-black-900"
              indicator={
                <Img
                  className="h-[5px] mr-[0] w-2.5"
                  src="images/img_vector_light_green_800_5x10.svg"
                  alt="Vector"
                />
              }
              isMulti={false}
              name="groupNinetyFour"
              options={optionsList}
              isSearchable={false}
              placeholder="23"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            />
          </div>
          <Button
            className="common-pointer cursor-pointer min-w-[198px] md:ml-[0] ml-[613px] mr-[629px] mt-[108px] rounded-[29px] text-center text-xl tracking-[-0.20px]"
            onClick={() => navigate("/formvolunteersuccess")}
            color="light_green_800"
            size="md"
            variant="fill"
          >
            Apply
          </Button>
          <Footer1 className="bg-gray-900_01 flex items-center justify-center mt-[127px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default FormVolunteerPage;
