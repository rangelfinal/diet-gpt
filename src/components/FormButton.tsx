"use client";

import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { useFormStatus } from "react-dom";

export const FormButton = (props: LoadingButtonProps) => {
  const status = useFormStatus();
  return <LoadingButton loading={status.pending} {...props} />;
};
