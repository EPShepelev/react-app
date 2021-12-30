import React from "react";
import style from "./ProfileEditForm.module.css";
import ProfileEditFormBase from "../common/Form/ProfileEditFormBase";

const ProfileEditForm = ({ profile, onEditProfileSubmit }) => {
  return (
    <>
       <ProfileEditFormBase btntext="Save changes" profile={profile} onEditProfileSubmit={onEditProfileSubmit} />
    </>
   )
}

export default ProfileEditForm;