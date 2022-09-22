import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CardModal from "./CardModal";

const CharacterCard = ({
  character: { image, name, gender, type, status, species },
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={handleOpen}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <CardModal 
        open={open}
        handleClose={handleClose}
        image={image}
        name={name}
        gender={gender}
        type={type}
        status={status}
        species={species}
      />
    </>
  );
};

export default CharacterCard;
