import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from "../styled/ContainersS";
import { Title } from '../styled/FormS';
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa"
import { toast } from "react-toastify"
import styles from "../styled/ContainerS.module.css";
import { Link } from "react-router-dom"
import Footer from '../layout/Footer';

export default function Containers({ users, setUsers, setOnEdit }) {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:3001/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };


  return (
    <>
    <Title>List Container</Title>

    <Table>
      <Thead>
        <Tr>
          <Th border-bottom-width="10px">Name</Th>
          <Th>Email</Th>
          <Th onlyWeb>Password</Th>
          <Th>Age</Th>
          <Th>Country</Th>
        </Tr>
      </Thead>

      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="10%">{item.name}</Td>
            <Td width="10%">{item.email}</Td>
            <Td width="10%" onlyWeb>{item.password}</Td>
            <Td width="10%">{item.age}</Td>
            <Td width="10%">{item.country}</Td>

            <Td alignCenter width="3%">
              <Link to="/form">
                <FaEdit onClick={() => handleEdit(item)} className={styles.btn} />
              </Link>
            </Td>

            <Td alignCenter width="3%">
              <FaTrash onClick={() => handleDelete(item.id)} className={styles.btn2}/>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    <Footer />
    </>
  );
};