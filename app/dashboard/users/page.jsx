import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for user" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Osman
              </div>
            </td>
            <td>osman@gmail.com</td>
            <td>30.01.2025</td>
            <td>user</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                 <Link href="/">
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <Link href="/">
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </Link>
              </div>
             
            </td>
          </tr>
          <tr>
            <td>Ali</td>
            <td>ali@gmail.com</td>
            <td>30.01.2025</td>
            <td>user</td>
            <td>active</td>
            <td>Wiev</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
};

export default Users;
