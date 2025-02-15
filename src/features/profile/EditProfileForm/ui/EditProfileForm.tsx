import React from "react";
import styles from "./styles.module.scss";

interface EditProfileFormProps {
  className?: string;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({
  className,
}) => {
  return <div className={styles.container}>form</div>;
};
