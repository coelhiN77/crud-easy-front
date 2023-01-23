import React, { useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import { toast } from "react-toastify";
import { FormContainer, InputArea, Label, Input, Button, Title, Button2 } from "../styled/FormS";
import { FaCheck, FaListAlt } from "react-icons/fa"
import Footer from "./Footer";


export default function Form({ getUsers, onEdit, setOnEdit }) {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.name.value = onEdit.name;
      user.email.value = onEdit.email;
      user.password.value = onEdit.password;
      user.age.value = onEdit.age;
      user.country.value = onEdit.country;
    }
  }, [onEdit]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.name.value ||
      !user.email.value ||
      !user.password.value ||
      !user.age.value ||
      !user.country.value 
    ) {
      return toast.warn("Fill in all fields!");
    } 

    if (onEdit) {
      await axios
      .put("http://localhost:3001/" + onEdit.id, {
        name: user.name.value,
        email: user.email.value,
        password: user.password.value,
        age: user.age.value,
        country: user.country.value
      })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
      .post("http://localhost:3001", {
        name: user.name.value,
        email: user.email.value,
        password: user.password.value,
        age: user.age.value,
        country: user.country.value,
      })
        .then(({ data }) => toast.success(data))
        .catch((err) => {
          try {
            toast.error(err.response.data.msg);
          } catch {
            toast.error("Creation error... Offline database!!");
            
          }
        });
    }

    user.name.value = "";
    user.email.value = "";
    user.password.value = "";
    user.age.value = "";
    user.country.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <>
      <Title>Register Account</Title>

      <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Name:</Label>
        <Input name="name"/>
      </InputArea>

      <InputArea>
        <Label>E-mail:</Label>
        <Input name="email" type="email" />
      </InputArea>

      <InputArea>
        <Label>Password:</Label>
        <Input name="password" type="number"/>
      </InputArea>

      <InputArea>
        <Label>Age:</Label>
        <Input name="age" type="number" min="18" max="65" />
      </InputArea>

      <InputArea>
        <Label>Country:</Label>
        <Input name="country" />
      </InputArea>

      <Button type="submit"><p>Save</p><FaCheck></FaCheck></Button>
      <Button2>
        <Link to="/containers" style={{ textDecoration:'none'}}><p>Container</p></Link>
      </Button2>
    </FormContainer>
    <Footer />
    </>
  );
};
