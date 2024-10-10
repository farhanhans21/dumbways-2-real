import { useState } from "react";
import { ResetPasswordForm } from "../../types/dto";

import React from "react";

function userResetForm() {
  const [resetForm, setResetForm] = useState<ResetPasswordForm>({
    password: "",
    confirmPassword: "",
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResetForm({ ...resetForm, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(resetForm);
  }

  return { resetForm, handleSubmit, handleChange };
}

export default userResetForm;
