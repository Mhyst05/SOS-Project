import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";
import ListHewanDilindungiStackOne from "components/ListHewanDilindungiStackOne";

const statusOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ListHewandilindungiPage = () => {
  const navigate = useNavigate();

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
              <header className="flex flex-row items-center justify-center w-full">
                <div className="flex flex-1 flex-row gap-10 items-center justify-start w-full">
                  <div
                    className="common-pointer bg-blue_gray-100 h-[60px] w-[60px]"
                    onClick={() => navigate("/landingpage")}
                  ></div>
                  <Text
                    className="text-2xl md:text-[22px] text-light_green-800 sm:text-xl w-auto"
                    size="txtUbuntuMedium24"
                  >
                    Save Our Species
                  </Text>
                </div>
                <ul className="flex flex-1 sm:flex-col flex-row gap-[66px] md:hidden items-center justify-center w-full common-row-list">
                  <li>
                    <a className="text-2xl md:text-[22px] text-orange-50 sm:text-xl">
                      <Text
                        className="common-pointer"
                        size="txtUbuntuRegular24"
                        onClick={() => navigate("/listhewandilindungi")}
                      >
                        LINDUNGI
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a className="text-2xl md:text-[22px] text-orange-50 sm:text-xl">
                      <Text
                        className="common-pointer"
                        size="txtUbuntuRegular24"
                        onClick={() => navigate("/laporan")}
                      >
                        LAPOR
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a className="text-2xl md:text-[22px] text-orange-50 sm:text-xl">
                      <Text
                        className="common-pointer"
                        size="txtUbuntuRegular24"
                        onClick={() => navigate("/articlelist")}
                      >
                        ARTIKEL
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a className="text-2xl md:text-[22px] text-orange-50 sm:text-xl">
                      <Text
                        className="common-pointer"
                        size="txtUbuntuRegular24"
                        onClick={() => navigate("/volunteer")}
                      >
                        Volunteer
                      </Text>
                    </a>
                  </li>
                </ul>
              </header>
              <Text
                className="mt-[180px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.40px]"
                size="txtUbuntuBold40WhiteA700"
              >
                Explore Protected Animal
              </Text>
              <Input
                name="group1712"
                placeholder="Search here...."
                className="!placeholder:text-black-900_4f !text-black-900_4f font-medium p-0 text-base text-left tracking-[-0.16px] w-full"
                wrapClassName="border border-black-900 border-solid flex mt-[43px] rounded-[30px] w-[41%]"
                suffix={
                  <Img
                    className="h-6 ml-[35px] my-auto"
                    src="images/img_search.svg"
                    alt="material-symbols:search"
                  />
                }
                size="sm"
              ></Input>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-[23px] items-center justify-start mt-[75px] md:px-5 w-[37%] md:w-full">
            <Button
              className="cursor-pointer font-light min-w-[140px] text-center text-xl tracking-[-0.20px]"
              shape="circle"
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
              name="group1714"
              options={statusOptionsList}
              isSearchable={false}
              placeholder="Status"
              color="white_A700"
              size="xs"
              variant="fill"
            />
            <Input
              name="group1713"
              placeholder="search"
              className="p-0 placeholder:text-white-A700 text-left text-xl tracking-[-0.20px] w-full"
              wrapClassName="flex rounded-[30px] w-[35%] sm:w-full"
              suffix={
                <Img
                  className="ml-4 my-auto"
                  src="images/img_close.svg"
                  alt="iconoir:cancel"
                />
              }
              color="light_green_800"
              size="xs"
            ></Input>
          </div>
          <div className="md:gap-5 gap-[49px] grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 justify-center max-w-7xl min-h-[auto] mt-[47px] mx-auto md:px-5 w-full">
            {new Array(9).fill({}).map((props, index) => (
              <React.Fragment key={`ListHewanDilindungiStackOne${index}`}>
                <ListHewanDilindungiStackOne
                  className="h-[560px] relative w-full"
                  onClick={() => navigate("/detailhewandilindungi")}
                  {...props}
                />
              </React.Fragment>
            ))}
          </div>
          <Button
            className="cursor-pointer min-w-[198px] mt-[86px] rounded-[29px] text-center text-xl tracking-[-0.20px]"
            shape="circle"
            color="light_green_800"
            size="md"
            variant="fill"
          >
            Load More
          </Button>
          <footer className="bg-gray-900_01 flex items-center justify-center mt-[106px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[71px] ml-[410px] mr-[416px] mt-[74px] w-[43%]">
              <div className="flex flex-col gap-10 items-center justify-center w-full">
                <div className="flex sm:flex-col flex-row gap-[50px] items-center justify-center w-[82%] md:w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center w-[60px]"
                    shape="circle"
                    color="blue_gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-11"
                      src="images/img_mdiinstagram.svg"
                      alt="mdiinstagram"
                    />
                  </Button>
                  <Button
                    className="flex h-[60px] items-center justify-center w-[60px]"
                    shape="circle"
                    color="blue_gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-[45px]"
                      src="images/img_mdiyoutube.svg"
                      alt="mdiyoutube"
                    />
                  </Button>
                  <Button
                    className="flex h-[60px] items-center justify-center w-[60px]"
                    shape="circle"
                    color="blue_gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-[45px]"
                      src="images/img_icbaselinediscord.svg"
                      alt="icbaselinedisco"
                    />
                  </Button>
                  <Button
                    className="flex h-[60px] items-center justify-center w-[60px]"
                    shape="circle"
                    color="blue_gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-11"
                      src="images/img_pajamastwitter.svg"
                      alt="pajamastwitter"
                    />
                  </Button>
                  <Button
                    className="flex h-[60px] items-center justify-center w-[60px]"
                    shape="circle"
                    color="blue_gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-[45px]"
                      src="images/img_icbaselinetiktok.svg"
                      alt="icbaselinetikto"
                    />
                  </Button>
                </div>
                <Text
                  className="text-lg text-orange-50"
                  size="txtUbuntuRegular18"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ListHewandilindungiPage;
