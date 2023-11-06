import { useEffect, useState } from "react";
import SingleCustomer from "./SingleCustomer";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("https://digital-tech-server.vercel.app/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
  return (
    <div>
     <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-20 md:gap-10 w-10/12  md:w-8/12 mx-auto" >
        {
            customers.map((customer,idx)=><SingleCustomer key={idx} customer={customer} ></SingleCustomer>)
        }
     </div>
    </div>
  );
};

export default Customers;
