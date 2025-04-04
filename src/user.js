// import styles from "./Style.module.css";
function User({ name, age, gender }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{age}</td>
          <td>{gender}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
