import React from "react";
import { Balance } from "widgets/Balance";
import { MyGuides } from "widgets/MyGuides";
import { ProfileInfo } from "widgets/ProfileInfo";
import { Sidebar } from "widgets/Sidebar";

const ProfilePage: React.FC = () => {
  return (
    <div>
      <Balance />
      <ProfileInfo />
      <MyGuides />
      <Sidebar />
    </div>
  );
};

export default ProfilePage;
