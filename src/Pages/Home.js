import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Tab, Tabs } from "react-bootstrap";


const Home = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();


  const handleUserInfo = (data) => {
    console.log(data);

    fetch("http://localhost:5000/user-details", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Loan Application Added");
        }
        reset();
      });
  };

  console.log(Object.keys(errors).length);
  return (
    <div className="px-5 py-4">
      <h2 className="text-center mb-5">Loan Application Process</h2>

      <form onSubmit={handleSubmit(handleUserInfo)}>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Personal Details">
            <div className="w-50">
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
                {...register("firstName", { required: true })}
              />
              <label className="label">
                <span className="text-danger d-block mb-2">
                  {errors.firstName?.type === "required" &&
                    "First Name is required"}
                </span>
              </label>
            </div>

            <div className="w-50">
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
                {...register("lastName", { required: true })}
              />
              <label className="label">
                <span className="text-danger d-block mb-2">
                  {errors.lastName?.type === "required" &&
                    "Last Name is required"}
                </span>
              </label>
            </div>

            <div className="w-50">
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                {...register("age", { required: true })}
              />
              <label className="label">
                <span className="text-danger d-block mb-2">
                  {errors.age?.type === "required" && "Age is required"}
                </span>
              </label>
            </div>

            <div className="w-50">
              <input
                type="number"
                placeholder="Mobile Number"
                className="form-control"
                {...register("mobile", { required: true })}
              />
              <label className="label">
                <span className="text-danger d-block mb-2">
                  {errors.mobile?.type === "required" &&
                    "Mobile No. is required"}
                </span>
              </label>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Business Details">
            <div className="w-50">
              <input
                type="text"
                placeholder="Business Name"
                className="form-control"
                {...register("businessName", { required: true })}
              />
              <label className="label">
                <span className="text-danger d-block mb-2">
                  {errors.businessName?.type === "required" &&
                    "Business Name is required"}
                </span>
              </label>
            </div>

            <div className="w-50">
              <input
                type="number"
                placeholder="GST No."
                className="form-control"
                {...register("gstNo", { required: true })}
              />
              <label className="label">
                <span className="text-danger d-block mb-2">
                  {errors.gstNo?.type === "required" && "GST No. is required"}
                </span>
              </label>
            </div>

            <div className="w-50">
              <input
                type="text"
                placeholder="Address"
                className="form-control"
                {...register("address", { required: true })}
              />
              <label className="label">
                <span className="text-danger d-block mb-2">
                  {errors.address?.type === "required" && "Address is required"}
                </span>
              </label>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Loan Application">
            <div className="w-50">
              <input
                type="number"
                placeholder="Loan Amount"
                className="form-control"
                {...register("loanAmount", { required: true })}
              />
              <label className="label">
                <span className="text-danger d-block mb-2">
                  {errors.loanAmount?.type === "required" &&
                    "Loan Amount is required"}
                </span>
              </label>
            </div>

            <div className="w-50">
              <input
                type="number"
                placeholder="Interest Rate"
                className="form-control"
                {...register("interestRate", { required: true })}
              />
              <label className="label">
                <span className="text-danger d-block mb-2">
                  {errors.interestRate?.type === "required" &&
                    "Interest Rate is required"}
                </span>
              </label>
            </div>

            <div className="w-50">
              <input
                type="date"
                placeholder="Loan Tenure"
                className="form-control"
                {...register("loanTenure", { required: true })}
              />
              <label className="label">
                <span className="text-danger d-block mb-2">
                  {errors.loanTenure?.type === "required" &&
                    "Loan Tenure is required"}
                </span>
              </label>
            </div>
          </Tab>
        </Tabs>

        <div className="w-50">
          <hr />
        </div>
        <div className="w-50">
          <input
            className="btn d-block btn-primary w-100"
            type="submit"
            value="Submit"
          />
          <label className="label d-block mx-auto text-center">
            <span className="text-danger  mb-2">
              {Object.keys(errors).length>0 && "Please check all the fields"}
            </span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Home;
