export namespace APIData {
  export interface UserDetail {
    username: string;
    userdob: string;
    useremail: string;
    userimage: string;
    usermobile: string;
    userpwd: string;
    userabout: string;
    userPostData: UserPostDetails[];
    createdat?: string;
    followers: string[];
    confirmuserpwd?: string;
  }

  export interface UserDetailLogin {
    useremail: string;
    userpwd: string;
  }

  export interface UserPostDetails {
    postImage: string;
    postText: string;
    postcomments: UserPostCommentDetails[];
    postlikes: string[];
    postCreatedData: string;
  }

  export interface UserPostCommentDetails {
    userId: string;
    userPostcomment: string;
    userPostcommentDatetime: string;
    userName: string;
  }

  export interface UserFollowers {
    id: string;
    display: string;
  }
}
