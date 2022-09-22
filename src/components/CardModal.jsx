import React from "react";
import {
  Box,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";

const CardModal = ({
  open,
  handleClose,
  image,
  name,
  gender,
  type,
  status,
  species
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Name: {name}
        </Typography>
        <Typography id="modal-modal-gender" sx={{ mt: 1 }}>
          gender: {gender}
        </Typography>
        <Typography id="modal-modal-type" sx={{ mt: 1 }}>
          type: {type}
        </Typography>
        <Typography id="modal-modal-status" sx={{ mt: 1 }}>
          status: {status}
        </Typography>
        <Typography id="modal-modal-species" sx={{ mt: 1 }}>
          species: {species}
        </Typography>
      </Box>
    </Modal>
  );
};

export default CardModal;
