import { BsAlarm } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

import "./schedule.css";

const Schedule = () => {
  return (
    <div className="w-9/12 mx-auto color  py-10">
      <section className="flex flex-col lg:flex-row gap-8  justify-between">
        <div className="flex items-center container gap-3">
          <div>
            <BsAlarm className="text-3xl text-sky-300 icon "></BsAlarm>
          </div>
          <div className="flex flex-col">
            <p>MON - FRI / 8:00 - 18:00</p>
            <p>Working Days/Hours!</p>
          </div>
        </div>
        {/* 2nd */}
        <div className="flex items-center container gap-3">
          <div>
            <AiOutlineCar className="text-3xl text-sky-300  "></AiOutlineCar>
          </div>
          <div className="flex flex-col">
            <p>MON - FRI / 8:00 - 18:00</p>
            <p>Working Days/Hours!</p>
          </div>
        </div>
        {/* 3rd */}
        <div className="flex items-center container gap-3">
          <div>
            <FiPhoneCall className="text-3xl text-sky-300  "></FiPhoneCall>
          </div>
          <div className="flex flex-col">
            <p>MON - FRI / 8:00 - 18:00</p>
            <p>Working Days/Hours!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;

{
  /* 
                
                <FiPhoneCall></FiPhoneCall> */
}
