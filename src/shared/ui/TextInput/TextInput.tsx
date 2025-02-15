import React from "react";
import styles from "./styles.module.scss";
import {
  TextInput as MTextInput,
  TextInputProps as MTextInputProps,
} from "@mantine/core";

interface TextInputProps extends MTextInputProps {
  className?: string;
  name: string;
  register: any;
}

export const TextInput: React.FC<TextInputProps> = ({
  className,
  name,
  register,
  ...props
}) => {
  return (
    <MTextInput
      classNames={styles}
      {...register(name)}
      {...props}
      error={
        props.error && (
          <div className={styles.error}>
            <p>{props.error}</p>
          </div>
        )
      }
    />
  );
};
