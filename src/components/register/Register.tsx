import { useEffect, useState } from "react";
import { Input, Ripple, initTE, Datepicker } from "tw-elements";
import "../login/Login.css";
import { useNavigate } from "react-router-dom";
import { PageLinks } from "../../common/appData/Constants";
import { APIData } from "../../common/appData/DataTypes";
import { Formik } from "formik";
import { InitialData } from "../../common/appData/InitalValues";
import { firestore } from "../../common/appData/FireBase";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import moment from "moment";
import { useAppStateAPI } from "../../common/appData/AppStateAPI";

var bcrypt = require("bcryptjs");
const Register: React.FC = () => {
  const navigate = useNavigate();
  const [profileDetails, setProfileDetails] = useState<APIData.UserDetail>(
    InitialData.userDetails
  );
  const { setShowPreloader } = useAppStateAPI();
  useEffect(() => {
    initTE({ Input, Ripple, Datepicker });
  }, []);

  const UserValidationSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    userdob: Yup.string().required("Required"),
    useremail: Yup.string().email("Invalid email").required("Required"),
    userpwd: Yup.string().required("Required"),
    userabout: Yup.string().required("Required"),
    usermobile: Yup.string().required("Required").max(10),
    confirmuserpwd: Yup.string()
      .required("Required")
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.userpwd === value;
      }),
  });
  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-22">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="../../assets/images/logo/beehivelogo.png"
              className="w-full bg-texture"
              alt="Phone image"
            />
          </div>

          {/* Right column container with form  */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            {/*Logo  */}
            <div className="text-center">
              <img
                className="mx-auto text-logo"
                src="../../assets/images/logo/textlogo.png"
                alt="logo"
              />
            </div>
            <Formik
              initialValues={profileDetails}
              validationSchema={UserValidationSchema}
              enableReinitialize
              onSubmit={async (values, { setSubmitting }) => {
                let updatedValues = { ...values };
                const userCollectionRef = firestore.collection("users");
                const querySnapshot = await userCollectionRef
                  .where("useremail", "==", updatedValues.useremail)
                  .get();
                let emailValidator = !querySnapshot.empty;
                if (emailValidator == true) {
                  setSubmitting(false);
                  toast.error("Email Already Registered");
                } else {
                  var salt = bcrypt.genSaltSync(10);
                  var hash = bcrypt.hashSync(updatedValues.userpwd, salt);
                  updatedValues.userpwd = hash;
                  delete updatedValues.confirmuserpwd;
                  updatedValues.createdat = moment().format(
                    "MMMM Do YYYY, h:mm:ss a"
                  );
                  setShowPreloader(true);
                  const docRef = await firestore
                    .collection("users")
                    .add(updatedValues);
                  setShowPreloader(false);
                  toast.success("Registration Successful");
                  setSubmitting(true);
                  setProfileDetails(InitialData.userDetails);
                  navigate(PageLinks.LOGIN);
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  {/* User Name  */}
                  <div className="relative" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="username"
                      name="username"
                      placeholder="User Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    <label
                      htmlFor="username"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      User Name *
                    </label>
                  </div>
                  {errors.username && touched.username ? (
                    <div className="mb-6 text-xs text-red-500">
                      {errors.username}
                    </div>
                  ) : (
                    <div className="mb-6"></div>
                  )}
                  {/* User mobile  */}
                  <div className="relative" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="usermobile"
                      name="usermobile"
                      placeholder="User Mobile"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.usermobile}
                    />
                    <label
                      htmlFor="usermobile"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      User Mobile *
                    </label>
                  </div>
                  {errors.usermobile && touched.usermobile ? (
                    <div className="mb-6 text-xs text-red-500">
                      {errors.usermobile}
                    </div>
                  ) : (
                    <div className="mb-6"></div>
                  )}
                  {/* DOB  */}
                  <div className="relative" data-te-input-wrapper-init>
                    <input
                      type="date"
                      name="userdob"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      placeholder="Select a date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userdob}
                    />
                    <label
                      htmlFor="floatingInput"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Date of Birth *
                    </label>
                  </div>
                  {errors.userdob && touched.userdob ? (
                    <div className="mb-6 text-xs text-red-500">
                      {errors.userdob}
                    </div>
                  ) : (
                    <div className="mb-6"></div>
                  )}
                  {/* Email input  */}
                  <div className="relative" data-te-input-wrapper-init>
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="emailid"
                      name="useremail"
                      placeholder="Email address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.useremail}
                    />
                    <label
                      htmlFor="emailid"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Email address *
                    </label>
                  </div>
                  {errors.useremail && touched.useremail ? (
                    <div className="mb-6 text-xs text-red-500">
                      {errors.useremail}
                    </div>
                  ) : (
                    <div className="mb-6"></div>
                  )}

                  {/* About  */}

                  <div className="relative" data-te-input-wrapper-init>
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      name="userabout"
                      placeholder="Your message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userabout}
                    ></textarea>
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Tell us About yourself *
                    </label>
                  </div>
                  {errors.userabout && touched.userabout ? (
                    <div className="mb-3 text-xs text-red-500">
                      {errors.userabout}
                    </div>
                  ) : (
                    <div className="mb-3"></div>
                  )}
                  {/* Password input  */}
                  <div className="relative" data-te-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="pwd"
                      name="userpwd"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userpwd}
                    />
                    <label
                      htmlFor="pwd"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Password *
                    </label>
                  </div>
                  {errors.userpwd && touched.userpwd ? (
                    <div className="mb-6 text-xs text-red-500">
                      {errors.userpwd}
                    </div>
                  ) : (
                    <div className="mb-6"></div>
                  )}
                  {/* Confirm Password input  */}
                  <div className="relative" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="cpwd"
                      name="confirmuserpwd"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmuserpwd}
                    />
                    <label
                      htmlFor="cpwd"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Confirm Password *
                    </label>
                  </div>
                  {errors.confirmuserpwd && touched.confirmuserpwd ? (
                    <div className="mb-6 text-xs text-red-500">
                      {errors.confirmuserpwd}
                    </div>
                  ) : (
                    <div className="mb-6"></div>
                  )}

                  {/* Submit button  */}
                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] submit-btn"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Sign up
                  </button>
                  {/* Login link */}
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Already have an account?
                    <span
                      onClick={(e: any) => {
                        e.preventDefault();
                        navigate(PageLinks.LOGIN);
                      }}
                      className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 cursor-pointer"
                    >
                      &nbsp;Login
                    </span>
                  </p>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
