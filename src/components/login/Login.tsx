import { useEffect, useState } from "react";
import { Input, Ripple, initTE } from "tw-elements";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { PageLinks } from "../../common/appData/Constants";
import { Formik } from "formik";
import { InitialData } from "../../common/appData/InitalValues";
import { firestore } from "../../common/appData/FireBase";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import { APIData } from "../../common/appData/DataTypes";

var bcrypt = require("bcryptjs");
// const passwordsMatch = bcrypt.compareSync(password, hashedPassword);
const Login: React.FC = () => {
  const [profileDetails, setProfileDetails] = useState<APIData.UserDetailLogin>(
    InitialData.userDetailLogin
  );
  const navigate = useNavigate();
  useEffect(() => {
    initTE({ Input, Ripple });
  }, []);

  const UserValidationSchema = Yup.object().shape({
    useremail: Yup.string().required("Required"),
    userpwd: Yup.string().required("Required"),
  });
  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
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
                const userCollectionRef = firestore.collection("users");
                const querySnapshot = await userCollectionRef
                  .where("useremail", "==", values.useremail)
                  .limit(1)
                  .get();

                if (querySnapshot.empty) {
                  // User not found
                  return false;
                }

                const userDoc = querySnapshot.docs[0];
                const hashedPassword = userDoc.get("userpwd");
                const userName = userDoc.get("username");
                const documentId = userDoc.id;

                // Compare the hashed password with the user-entered password
                const passwordMatch = await bcrypt.compare(
                  values.userpwd,
                  hashedPassword
                );

                if (passwordMatch == true) {
                  toast.success("Welcome" + " " + userName);
                  localStorage.setItem("documentId",documentId);
                  localStorage.setItem("userName",userName);
                  setSubmitting(true);
                  navigate(PageLinks.HOME);
                } else {
                  setSubmitting(false);
                  toast.error("Invalid Credentials");
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
                  {/* Email input  */}
                  <div className="relative" data-te-input-wrapper-init>
                    <input
                      type="text"
                      name="useremail"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput3"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.useremail}
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="exampleFormControlInput3"
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

                  {/* Password input  */}
                  <div className="relative" data-te-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput33"
                      name="userpwd"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userpwd}
                    />
                    <label
                      htmlFor="exampleFormControlInput33"
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

                  {/* Submit button  */}
                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] submit-btn"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Sign in
                  </button>
                  {/* Register link */}
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Don't have an account?
                    <span
                      onClick={(e: any) => {
                        e.preventDefault();
                        navigate(PageLinks.REGISTER);
                      }}
                      className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 cursor-pointer"
                    >
                      &nbsp;Register
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

export default Login;
