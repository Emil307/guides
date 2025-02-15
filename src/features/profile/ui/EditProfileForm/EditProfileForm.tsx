import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "@mantine/core";
import { useTheme } from "shared/config";
import { TextInput } from "shared/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { $ValidationSchema, ValidationSchema } from "./types";

export const EditProfileForm: React.FC = () => {
  const { t } = useTranslation("editProfile");
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver($ValidationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data: any) => {
    console.log(data);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputs}>
        <div className={styles.top}>
          <TextInput
            name="name"
            placeholder=""
            label={t("User name")}
            register={register}
            error={errors.name?.message}
          />
        </div>
        <TextInput
          name="description"
          placeholder=""
          label={t("Description")}
          register={register}
          error={errors.description?.message}
        />
        <TextInput
          name="link"
          label={t("Add link")}
          placeholder={t("Insert the link address")}
          register={register}
          error={errors.link?.message}
        />
      </div>
      <Button
        styles={() => ({
          root: {
            width: "100%",
            backgroundColor: theme === "dark" ? "#fff" : "#000",
            color: theme === "dark" ? "#000" : "#fff",
          },
        })}
      >
        {t("Done")}
      </Button>
    </form>
  );
};
