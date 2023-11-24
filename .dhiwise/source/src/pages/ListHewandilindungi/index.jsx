import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import ListHewanDilindungiStackOne from "components/ListHewanDilindungiStackOne";

import { CloseSVG } from "../../assets/images";

const statusOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ListHewandilindungiPage = () => {
  const navigate = useNavigate();

  const [group115value, setGroup115value] = React.useState("");

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto pb-0.5 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[500px] md:px-5 relative w-full">
            <Img
              className="h-[500px] m-auto object-cover w-full"
              src="images/img_createminiatur.png"
              alt="createminiatur"
            />
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[4%] w-[89%]">
              <Header className="flex flex-row items-center justify-center w-full" />
              <Text
                className="mt-[180px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.40px]"
                size="txtUbuntuBold40WhiteA700"
              >
                Explore Protected Animal
              </Text>
              <Input
                name="group115"
                placeholder="Search here...."
                value={group115value}
                onChange={(e) => setGroup115value(e)}
                className="!placeholder:text-black-900_4f !text-black-900_4f font-medium p-0 text-base text-left tracking-[-0.16px] w-full"
                wrapClassName="border border-black-900 border-solid flex mt-[43px] rounded-[30px] w-[41%]"
                suffix={
                  group115value?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer h-6 ml-[35px] my-auto"
                      onClick={() => setGroup115value("")}
                      fillColor="#0000004f"
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                    />
                  ) : (
                    <Img
                      className="cursor-pointer h-6 ml-[35px] my-auto"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  )
                }
                size="sm"
              ></Input>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-[23px] items-center justify-start mt-[75px] md:px-5 w-[37%] md:w-full">
            <Button
              className="cursor-pointer font-light min-w-[140px] rounded-[30px] text-center text-xl tracking-[-0.20px]"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              Semua
            </Button>
            <SelectBox
              className="font-light rounded-[30px] text-left text-xl tracking-[-0.20px] w-[31%] sm:w-full"
              placeholderClassName="text-black-900"
              indicator={
                <Img
                  className="h-[5px] mr-[0] w-2.5"
                  src="images/img_vector_light_green_800_5x10.svg"
                  alt="Vector"
                />
              }
              isMulti={false}
              name="group117"
              options={statusOptionsList}
              isSearchable={false}
              placeholder="Status"
              color="white_A700"
              size="xs"
              variant="fill"
            />
            <Input
              name="group116"
              placeholder="search"
              className="p-0 placeholder:text-white-A700 text-left text-xl tracking-[-0.20px] w-full"
              wrapClassName="flex rounded-[30px] w-[35%] sm:w-full"
              suffix={
                <Img
                  className="ml-4 my-auto"
                  src="images/img_close.svg"
                  alt="close"
                />
              }
              color="light_green_800"
              size="xs"
            ></Input>
          </div>
          <div className="md:gap-5 gap-[49px] grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 justify-center max-w-7xl min-h-[auto] mt-[45px] mx-auto md:px-5 w-full">
            <div className="h-[560px] relative w-full">
              <Img
                className="common-pointer h-[560px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_pexelsniklasj.png"
                alt="pexelsniklasj"
                onClick={() => navigate("/detailhewandilindungi")}
              />
              <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[15px] rounded-bl-[20px] rounded-br-[20px] w-full">
                <div className="flex flex-col gap-[19px] items-start justify-start mb-[34px] mt-[15px] w-full">
                  <div className="flex flex-row items-start justify-start w-[95%] md:w-full">
                    <Text
                      className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-deep_orange-800 tracking-[-0.30px]"
                      size="txtUbuntuBold30Deeporange800"
                    >
                      Lorem ipsum
                    </Text>
                    <Img
                      className="h-8 ml-[75px] w-8"
                      src="images/img_materialsymbolswarning.svg"
                      alt="materialsymbols"
                    />
                    <Text
                      className="ml-3.5 mt-[9px] text-[15px] text-white-A700 tracking-[-0.15px]"
                      size="txtUbuntuRegular15WhiteA700"
                    >
                      Status
                    </Text>
                  </div>
                  <Text
                    className="leading-[20.00px] text-[15px] text-orange-50 tracking-[-0.15px] w-full"
                    size="txtUbuntuRegular15"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sed euismod dui
                  </Text>
                </div>
              </div>
            </div>
            <ListHewanDilindungiStackOne
              className="h-[560px] relative w-full"
              onClick={() => navigate("/detailhewandilindungi")}
            />
            <ListHewanDilindungiStackOne
              className="h-[560px] relative w-full"
              onClick={() => navigate("/detailhewandilindungi")}
            />
            <ListHewanDilindungiStackOne
              className="h-[560px] relative w-full"
              onClick={() => navigate("/detailhewandilindungi")}
            />
            <ListHewanDilindungiStackOne
              className="h-[560px] relative w-full"
              onClick={() => navigate("/detailhewandilindungi")}
            />
            <ListHewanDilindungiStackOne
              className="h-[560px] relative w-full"
              onClick={() => navigate("/detailhewandilindungi")}
            />
            <ListHewanDilindungiStackOne
              className="h-[560px] relative w-full"
              onClick={() => navigate("/detailhewandilindungi")}
            />
            <ListHewanDilindungiStackOne
              className="h-[560px] relative w-full"
              onClick={() => navigate("/detailhewandilindungi")}
            />
            <ListHewanDilindungiStackOne
              className="h-[560px] relative w-full"
              onClick={() => navigate("/detailhewandilindungi")}
            />
          </div>
          <Button
            className="cursor-pointer min-w-[198px] mt-[86px] rounded-[29px] text-center text-xl tracking-[-0.20px]"
            color="light_green_800"
            size="md"
            variant="fill"
          >
            Load More
          </Button>
          <Footer className="bg-gray-900_01 flex items-center justify-center mt-[106px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ListHewandilindungiPage;
