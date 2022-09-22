import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  InputLabel,
} from "@mui/material";
import { Box } from "@mui/system";

import ToDoList from "../components/ToDoList";

const getLocalItems = () => {
  return JSON.parse(localStorage.getItem("watchList"));
};

export const WatchList = () => {
  const [input, setInput] = useState("");
  const [acc, setAcc] = useState(getLocalItems() || []);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(acc));
  }, [acc]);

  const handleSave = (input) => {
    if (input) {
      const id = `${Math.random()}${input.slice(0, 4)}`;
      setAcc([
        {
          id,
          input,
          completed: false,
        },
        ...acc,
      ]);
    }
    setInput("");
  };

  const handleDelete = (id) => {
    setAcc(acc.filter((el) => el.id !== id));
  };

  const handleStatus = (id) => {
    const changedStatus = acc.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          completed: !el.completed,
        };
      }
      return el;
    });
    setAcc(changedStatus);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <InputLabel id={`simple-toDo-label`}>Please write episode</InputLabel>
      <Input
        labelid={`simple-toDo-label`}
        id={`simple-toDo`}
        label="toDo"
        value={input}
        sx={{ width: "60%" }}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={() => handleSave(input)}>Save</Button>
      <ToDoList 
        acc={acc}
        handleStatus={handleStatus}
        handleDelete={handleDelete}
      />
    </Box>
  );
};
