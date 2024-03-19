/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterRequest>();
    const onSubmit=(data:RegisterRequest)=>{
      alert("submitted:"+JSON.stringify(data));
    }
  return (
    <>
      
      <form onSubmit ={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5 w-1/1 mx-4 md:w-1/2 md:mx-auto shadow-2xl rounded-xl p-5 text-xl bg-black">
        <h1 className="text-center text-yellow-400 ">Sign up</h1>
        <input className="bg-black text-yellow-400"
          {...register("username", {
            required: "username is required",
            minLength: { value: 2, message: "Min length is 2" },
            maxLength: { value: 20, message: "Max length is 20" },
          })}
          type="text"
          autoComplete="username"
          placeholder="username"
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
        <input className="bg-black text-yellow-400"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Email must be valid",
            },
          })}
          type="email"
          autoComplete="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input className="bg-black text-yellow-400"
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 8,
              message: "Password must contain at least 8 digits",
            },
            maxLength: {
              value: 32,
              message: "Password must not exceed 32 characters",
            },
            pattern: {
              value:
                /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*!@$%^&]).{8,32}$/,
              message:
                "password must contain at least 1 lowercase letter,1 uppercase letter,1 digit and 1 special character",
            },
          })}
          type="password"
          autoComplete="new-password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <input  className="rounded-md bg-yellow-300 text-black p-2" type="submit" value="Register" />
      </form>
      <DevTool control={control} ></DevTool>
    </>
  );
};

export default Register;