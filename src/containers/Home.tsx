import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../components/Container";
import Typography from "../components/Typography";
import { addTodo } from "../store/action";
import { Todo } from "../store/types";

import logo from "../logo.svg";

const HomePage: React.FC = () => {
  const todo = useSelector((state: Todo[]) => state);
  const dispatch = useDispatch();

  const getTodo = (): void => {
    dispatch(
      addTodo({ id: todo.length + 1, text: "asdasd", completed: false })
    );
  };

  return (
    <Container>
      <Typography variant="h1">Home Title</Typography>
      <img src={logo} className="App-logo" alt="logo" />

      {todo.length &&
        todo.map((todo: Todo) => (
          <Typography variant="p" key={todo.id}>
            {todo.id} <Typography variant="small">{todo.text}</Typography>{" "}
            {todo.completed ? "completed" : "false"}.
          </Typography>
        ))}

      <button onClick={() => getTodo()}>get Todo</button>

      <Typography variant="p">
        Edit <Typography variant="small">src/App.js</Typography> and save to
        reload.
      </Typography>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Container>
  );
};

export default HomePage;
