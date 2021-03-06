import { UsersAPI, profileAPI } from "../api/api";

import { PostsDataType, PhotosType, ProfileType } from "../types/types";

const ADD_POST = "social-network/profile/ADD-POST";
const SET_USER_PROFILE = "social-network/profile/SET_USER_PROFILE";
const SET_USER_STATUS = "social-network/profile/SET_USER_STATUS";
const DELETE_POST = "social-network/profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "social-network/profile/SAVE_PHOTO_SUCCESS";

const initialState = {
  postsData: [
    {
      id: 1,
      likes: 3,
      text: "post one",
    },
    {
      id: 2,
      likes: 7,
      text: "post two",
    },
    {
      id: 3,
      likes: 42,
      text: "post three",
    },
    {
      id: 4,
      likes: 11,
      text: "post four",
    },
    {
      id: 5,
      likes: 2,
      text: "someting strange",
    },
    {
      id: 6,
      likes: 42,
      text: "it works!",
    },
  ] as Array<PostsDataType>,
  profile: null as ProfileType | null,
  status: "",
};

export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      const post = action.post;
      return {
        ...state,
        postsData: [
          ...state.postsData,
          {
            id: 7,
            likes: 0,
            text: post,
          },
        ],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((item) => item.id !== action.postId),
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    default:
      return state;
  }
};

type AddPostActionType = {
  type: typeof ADD_POST;
  post: string;
};
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
type SetStatusActionType = {
  type: typeof SET_USER_STATUS;
  status: string;
};
type DeletePostActionType = {
  type: typeof DELETE_POST;
  postId: number;
};
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};

export const addPostActionCreator = (post: string): AddPostActionType => ({
  type: ADD_POST,
  post: post,
});
export const setUserProfile = (
  profile: ProfileType
): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile: profile,
});
export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_USER_STATUS,
  status: status,
});
export const deletePostActionCreator = (
  postId: number
): DeletePostActionType => ({
  type: DELETE_POST,
  postId: postId,
});
export const savePhotoSuccess = (
  photos: PhotosType
): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos: photos,
});

export const getProfile = (userId: number) => {
  return async (dispatch: any) => {
    const data = await UsersAPI.getUserProfile(userId);
    dispatch(setUserProfile(data));
  };
};

export const getStatus = (userId: number) => {
  return async (dispatch: any) => {
    const data = await profileAPI.getUserStatus(userId);
    dispatch(setStatus(data));
  };
};

export const updateStatus = (status: string) => {
  return async (dispatch: any) => {
    const data = await profileAPI.updateUserStatus(status);
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export const savePhoto = (file: any) => {
  return async (dispatch: any) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos));
    }
  };
};

export const saveProfileData = (profile: ProfileType) => {
  return async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);
    if (data.data.resultCode === 0) {
      dispatch(getProfile(userId));
    }
  };
};

export default profileReducer;
