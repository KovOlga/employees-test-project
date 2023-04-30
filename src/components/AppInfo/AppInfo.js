import "./app-info.css";

const AppInfo = ({ employeeTotal, employeesOnRise }) => {
  return (
    <div className="app-info">
      <h1>учет сотрудников в компании</h1>
      <h2>Общее число сотрудников: {employeeTotal} </h2>
      <h2>Премию получат: {employeesOnRise} </h2>
    </div>
  );
};

export default AppInfo;
