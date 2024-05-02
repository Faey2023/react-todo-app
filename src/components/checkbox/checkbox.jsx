import React from "react";
import { Checkbox as MuiCheckbox, IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./checkbox.scss";

export const Checkbox = ({ onClick, checked, onDelete, label, onKeyUp }) => (
  <div className="checkbox">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked={checked}
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <MuiCheckbox
        tabIndex="-1"
        checked={checked}
        onChange={onClick}
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <div className={checked ? "checkbox-checked" : ""}>{label}</div>
    </div>
    <IconButton
      aria-label="delete"
      onClick={onDelete}
      className="checkbox-delete"
    >
      <DeleteOutlineOutlinedIcon />
    </IconButton>
  </div>
);
