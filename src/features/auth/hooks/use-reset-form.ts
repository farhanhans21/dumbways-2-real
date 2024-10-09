import { useState } from "react";
import { ResetForm } from "../../types/dto";

import React from "react";

function userResetForm() {
  const [resetForm, setResetForm] = useState<ResetForm>({
    password: "",
    passwordConfirm: "",
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
