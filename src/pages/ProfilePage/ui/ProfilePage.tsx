import React from "react";
import { Balance } from "widgets/Balance";
import { Sidebar } from "widgets/Sidebar";

const ProfilePage: React.FC = () => {
  return (
    <div>
      <Balance />
      <Sidebar />
    </div>
  );
};

export default ProfilePage;
