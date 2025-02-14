import React from "react";
import { Balance } from "widgets/Balance";
import { ProfileInfo } from "widgets/ProfileInfo";
import { Sidebar } from "widgets/Sidebar";

const ProfilePage: React.FC = () => {
  return (
    <div>
      <Balance />
      <ProfileInfo />
      <Sidebar />
    </div>
  );
};

export default ProfilePage;
