import React from "react";

 
 
// src/App.js
 
//import "./App.css";
import { useState } from "react";
 
function FormRegistro() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
 
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/signup/", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          username: email,
          password: password,
          first_name: fname,
          last_name: lname,
        }),
      });
 
      let resJson = await res.json();
      if (res.status === 200 || 201) {
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setMessage("User created successfully");
        return
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
 
  return (
      <div className="xl:h-screen lg:h-auto">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                aria-hidden
                alt="Picture of me taking a photo of an image"
              />
            </div>
 
            <div className="p-6 rounded-lg shadow-lg bg-white max-w-md  flex justify-end lg:mt-8 md:mt-5">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      value={fname}
                      className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="nombre"
                      aria-describedby="nombre"
                      placeholder="Nombre"
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      value={lname}
                      className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="apellido"
                      aria-describedby="apellido"
                      placeholder="Apellido"
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    value={email}
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="password"
                    value={password}
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
 
                <button
                  type="submit"
                  className="
      w-full
      px-6
      py-2.5
      bg-green-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-green-700 hover:shadow-lg
      focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-green-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                >
                  Registrarse
 
                </button>
 
 
                <button
                  type="submit"
                  className="
      w-full
      px-6
      py-2.5
      mt-3
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                >
 
                  Volver
                </button>
 
                <div className="message">{message ? <p>{message}</p> : null}</div>
 
              </form>
 
            </div>
          </div>
        </div>
      </div>
  );
 
  }
export default FormRegistro;