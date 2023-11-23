import React from "react";

import { Text } from "components";

const VolunteerStackrectangle596One = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-full items-center justify-start m-auto w-[87%]">
          <div className="bg-orange-50 h-[60px] mt-5 w-[60px]"></div>
          <Text
            className="mt-5 text-orange-50 text-xl tracking-[-0.20px]"
            size="txtUbuntuBold20"
          >
            {props?.username1}
          </Text>
          <Text
            className="leading-[20.00px] mb-5 mt-4 text-[15px] text-center text-orange-50 tracking-[-0.15px] w-full"
            size="txtUbuntuBold15"
          >
            {props?.userdescription1}
          </Text>
        </div>
        <div className="absolute bg-deep_orange-300 flex flex-col h-full inset-[0] items-center justify-center m-auto p-5 rounded-[20px] w-full">
          <div className="bg-orange-50 h-[60px] mt-5 w-[60px]"></div>
          <Text
            className="mt-5 text-orange-50 text-xl tracking-[-0.20px]"
            size="txtUbuntuBold20"
          >
            {props?.username1}
          </Text>
          <Text
            className="leading-[20.00px] mb-5 mt-4 text-[15px] text-center text-orange-50 tracking-[-0.15px] w-full"
            size="txtUbuntuBold15"
          >
            {props?.userdescription1}
          </Text>
        </div>
      </div>
    </>
  );
};

VolunteerStackrectangle596One.defaultProps = {
  username: "Lorem Ipsum ",
  userdescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  username1: "Lorem Ipsum ",
  userdescription1:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
};

export default VolunteerStackrectangle596One;
