import React from "react";

import { Img, Text } from "components";

const ListHewanDilindungiStackOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="common-pointer absolute h-[560px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
          src="images/img_pexelsniklasj.png"
          alt="pexelsniklasj"
          onClick={props?.onClick}
        />
        <div className="absolute bg-black-900_4c bottom-[0] md:h-28 h-44 inset-x-[0] mx-auto p-[15px] rounded-bl-[20px] rounded-br-[20px] w-full">
          <div className="flex flex-col gap-[19px] h-full items-start justify-start mt-[15px] mx-auto w-[93%]">
            <div className="flex flex-row gap-[76px] items-start justify-start w-4/5 md:w-full">
              <Text
                className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-deep_orange-800 tracking-[-0.30px]"
                size="txtUbuntuBold30Deeporange800"
              >
                {props?.username}
              </Text>
              <Img
                className="h-8 w-8"
                src="images/img_materialsymbolswarning.svg"
                alt="materialsymbols"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="leading-[20.00px] text-[15px] text-orange-50 tracking-[-0.15px] w-full"
                  size="txtUbuntuRegular15"
                >
                  {props?.userstatustext}
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="absolute right-[9%] text-[15px] text-white-A700 top-[22%] tracking-[-0.15px]"
            size="txtUbuntuRegular15WhiteA700"
          >
            {props?.status}
          </Text>
        </div>
      </div>
    </>
  );
};

ListHewanDilindungiStackOne.defaultProps = {
  username: "Lorem ipsum",
  userstatustext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed euismod dui",
  status: "Status",
};

export default ListHewanDilindungiStackOne;
