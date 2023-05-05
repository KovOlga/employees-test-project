import { Component } from "react";
import styles from "./app.module.css";
import EmployeesFormOnState from "../EmployeesFormOnState/EmployeesFormOnState";
import FormCustomHook from "../FormCustomHook/FormCustomHook";
import SliderUseReducer from "../SliderUseReducer/SliderUseReducer";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <EmployeesFormOnState />
        <h1 className={styles.title}>Custom Hook example</h1>
        <FormCustomHook />
        <SliderUseReducer />
      </div>
    );
  }
}

export default App;
