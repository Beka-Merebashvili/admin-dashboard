import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src="/noavatar.png" alt="" fill />
          </div>
          Beka Merebashvili
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            {/* <input type="hidden" name="id" value={user.id}/> */}
            <label>Username</label>
            <input type="text" name="username" placeholder="Beka Mereabshvili" />
            <label>Email</label>
            <input type="email" name="email" placeholder="beqamerebashvili26@gmail.com" />
            <label>Password</label>
            <input type="password" name="password" />
            <label>Phone</label>
            <input type="text" name="phone" placeholder="+995597336006" />
            <label>Address</label>
            <textarea type="text" name="address" placeholder="Tbilisi" />
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            <button>Update</button>
          </form>
        </div>
      </div>
    )
}

export default SingleUserPage