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
    <div className='w-full px-5'>
    <div className='pdf-viewer-control'>
        <object data={"http://139.180.158.140/development/api/public/uploads/pdfs/standard-charter-d4571566-e68c-4b68-b5bb-8a5c8ad5ee51-f5987e1a-b19e-4aa8-9783-cb83e7916b02.pdf"} type="application/pdf" width="100%" height="100%">
            <embed src={"http://139.180.158.140/development/api/public/uploads/pdfs/standard-charter-d4571566-e68c-4b68-b5bb-8a5c8ad5ee51-f5987e1a-b19e-4aa8-9783-cb83e7916b02.pdf"} width="100%" height="100%" />
        </object>
    </div>
</div>
  );
};

export default Login;
