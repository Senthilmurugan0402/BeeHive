import moment from "moment";
import { APIData } from "./DataTypes";

export namespace InitialData {
  export const userDetails: APIData.UserDetail = {
    username: "",
    userdob: "",
    useremail: "",
    userimage: "",
    usermobile: "",
    userabout: "",
    userpwd: "",
    createdat: "",
    followers: [],
    confirmuserpwd: "",
  };
  export const userDetailLogin: APIData.UserDetailLogin = {
    useremail: "",
    userpwd: "",
  };
}
