import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";
import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    // return <EmployeesListItem name={item.name} salary={item.salary} />; идентично =>
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });

  return <ul className="app-list list-group employees-list">{elements}</ul>;
};

export default EmployeesList;
