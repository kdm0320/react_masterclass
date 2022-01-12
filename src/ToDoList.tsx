import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  Email: string;
  FirstName: string;
  LastName?: string;
  Username: string;
  Password: string;
  Password1: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      Email: "@naver.com",
    },
  });
  const onValid = (data: any) => {};
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", {
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.Email?.message}</span>
        <input {...register("FirstName")} placeholder="First Name" />
        <input {...register("LastName")} placeholder="Last Name" />
        <input
          {...register("Username", {
            required: true,
            minLength: { value: 5, message: "Your password is too short" },
          })}
          placeholder="Username"
        />
        <input {...register("Password")} placeholder="Password" />
        <input {...register("Password1")} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
