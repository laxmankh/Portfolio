import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import Spin from "react-reveal/Spin";
import myimages from "../../public/images/github.jpg";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <Spin>
              <img src={myimages} alt="profile_pic" />
            </Spin>
          </div>
          <Jump>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                𝗔𝘀 𝗮 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿, 𝗜 𝗯𝗿𝗶𝗻𝗴 𝗮 𝗽𝗮𝘀𝘀𝗶𝗼𝗻 𝗳𝗼𝗿 𝗰𝗿𝗲𝗮𝘁𝗶𝗻𝗴 𝘃𝗶𝘀𝘂𝗮𝗹𝗹𝘆
                𝗮𝗽𝗽𝗲𝗮𝗹𝗶𝗻𝗴 𝗮𝗻𝗱 𝗶𝗻𝘁𝘂𝗶𝘁𝗶𝘃𝗲 𝘂𝘀𝗲𝗿 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲𝘀. 𝗪𝗶𝘁𝗵 𝗮 𝘀𝗼𝗹𝗶𝗱
                𝗳𝗼𝘂𝗻𝗱𝗮𝘁𝗶𝗼𝗻 𝗶𝗻 𝗛𝗧𝗠𝗟, 𝗦𝗦, 𝗮𝗻𝗱 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁, 𝗜 𝘁𝗮𝗸𝗲 𝗽𝗿𝗶𝗱𝗲 𝗶𝗻 𝗯𝘂𝗶𝗹𝗱𝗶𝗻𝗴
                𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗶𝘃𝗲 𝘄𝗲𝗯𝘀𝗶𝘁𝗲𝘀 𝗮𝗻𝗱 𝘄𝗲𝗯 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻𝘀 𝘁𝗵𝗮𝘁 𝗱𝗲𝗹𝗶𝗴𝗵𝘁 𝘂𝘀𝗲𝗿𝘀 𝗮𝗻𝗱
                𝗮𝗰𝗵𝗶𝗲𝘃𝗲 𝗯𝘂𝘀𝗶𝗻𝗲𝘀𝘀 𝗼𝗯𝗷𝗲𝗰𝘁𝗶𝘃𝗲𝘀. 𝗖𝗼𝗻𝘁𝗶𝗻𝘂𝗼𝘂𝘀𝗹𝘆 𝗲𝘅𝗽𝗹𝗼𝗿𝗶𝗻𝗴 𝗻𝗲𝘄
                𝘁𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝗶𝗲𝘀 𝗹𝗶𝗸𝗲 𝗥𝗲𝗮𝗰𝘁.𝗷𝘀,𝗕𝗼𝗼𝘁𝘀𝘁𝗿𝗮𝗽,𝗡𝗼𝗱𝗲.𝗷𝘀,𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗝𝗦,𝗠𝗼𝗴𝗼𝗱𝗯
                𝗮𝗻𝗱 𝗱𝗲𝘀𝗶𝗴𝗻 𝘁𝗿𝗲𝗻𝗱𝘀, 𝗟𝗲𝘁'𝘀 𝗰𝗼𝗻𝗻𝗲𝗰𝘁 𝗮𝗻𝗱 𝗲𝘅𝗽𝗹𝗼𝗿𝗲 𝗵𝗼𝘄 𝗜 𝗰𝗮𝗻
                𝗰𝗼𝗻𝘁𝗿𝗶𝗯𝘂𝘁𝗲 𝗺𝘆 𝘀𝗸𝗶𝗹𝗹𝘀 𝘁𝗼 𝗱𝗿𝗶𝘃𝗲 𝘆𝗼𝘂𝗿 𝘄𝗲𝗯 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗽𝗿𝗼𝗷𝗲𝗰𝘁𝘀 𝘁𝗼
                𝘀𝘂𝗰𝗰𝗲𝘀𝘀. 𝗶𝗻𝘁𝗲𝗿𝗻 𝗮𝘁 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝘁 𝗰𝗼𝗺𝗽𝗮𝗻𝗶𝗲𝘀 𝗮𝘀 𝗳𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗮𝘀
                𝗧𝗵𝗲 𝘀𝗽𝗮𝗿𝗸 𝗙𝗼𝗻𝗱𝗮𝘁𝗶𝗼𝗻,𝗜𝗻𝘁𝗲𝗿𝗽𝗲,𝗢𝗮𝘀𝗶𝘀 𝗜𝗻𝗳𝗼𝗯𝘆𝘁𝗲. 𝗠𝘆 𝗴𝗼𝗮𝗹 𝗶𝘀 𝘁𝗼 𝗰𝗿𝗲𝗮𝘁𝗲
                𝘄𝗲𝗯𝘀𝗶𝘁𝗲𝘀 𝘁𝗵𝗮𝘁 𝗮𝗿𝗲 𝗯𝗼𝘁𝗵 𝘃𝗶𝘀𝘂𝗮𝗹𝗹𝘆 𝗮𝗽𝗽𝗲𝗮𝗹𝗶𝗻𝗴 𝗮𝗻𝗱 𝗲𝗮𝘀𝘆 𝘁𝗼 𝘂𝘀𝗲.
              </p>
            </div>
          </Jump>
        </div>
      </div>
    </>
  );
};

export default About;
