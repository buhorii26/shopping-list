import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./Todos.module.css";

import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";

const Todos = ({todos, onSubstraction,onAddition}) => {
  return (
    <div className={style.todos}>
      {todos.map((todo, index, arr) => (
        <div
          key={index}
          // className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`}
          className={classNames(style.todo, {
            [style.todoDivider]: !(arr.length === index + 1),
          })}
        >
          {todo.title}

          <div className={style.todoIconWrapper}>
            <div className={style.todoCount}>{todo.count}</div>

            <button
              onClick={() => onSubstraction(index)}
              className={style.todoActionButton}
            >
              <img src={minusIcon} alt="minus icon" />
            </button>
            <button
              onClick={() => onAddition(index)}
              className={style.todoActionButton}
            >
              <img src={plusIcon} alt="plus icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  onSubstraction: PropTypes.func,
  onAddition: PropTypes.func,
};

export default Todos;
