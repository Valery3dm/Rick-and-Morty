import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  Typography,
} from "@mui/material";

const ToDoList = ({ list, handleStatus, handleDelete }) => (
  <List sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    {list.map((item) => (
      <Card sx={{ minWidth: 200, maxWidth: "60%", mt: 8 }} key={item.id}>
        <CardContent onClick={() => handleStatus(item.id)}>
          <Typography
            variant="h5"
            component="div"
            sx={item.completed ? { textDecoration: "line-through" } : {}}
          >
            {item.input}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleDelete(item.id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    ))}
  </List>
);

export default ToDoList;
