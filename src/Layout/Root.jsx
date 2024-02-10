import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
       {/* <div className='min-h-[calc(100vh-100px)]'>
        <Outlet />
      </div> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
