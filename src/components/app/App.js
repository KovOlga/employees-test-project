import { Component } from "react";
import styles from "./app.module.css";
import EmployeesFormOnState from "../EmployeesFormOnState/EmployeesFormOnState";
import FormCustomHook from "../FormCustomHook/FormCustomHook";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <EmployeesFormOnState />
        <h1 className={styles.title}>Custom Hook example</h1>
        <FormCustomHook />
      </div>
    );
  }
}

export default App;
