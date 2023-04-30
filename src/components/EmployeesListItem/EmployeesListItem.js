import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const { name, salary, onDelete, increase, rise, onToggleProp } = props;

  let liClassNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    liClassNames += " increase";
  }
  if (rise) {
    liClassNames += " like";
  }
  return (
    <li className={liClassNames}>
      <span
        data-toggle="rise"
        onClick={onToggleProp}
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn-cookie btn-sm"
          onClick={onToggleProp}
          data-toggle="increase"
          type="button"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button onClick={onDelete} className="btn-trash btn-sm" type="button">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
