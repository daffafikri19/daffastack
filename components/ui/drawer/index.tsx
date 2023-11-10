"use client"

import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { DefaultButton, OutlinedButton } from "../button";

export function DrawerDefault({ children } : { children : React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <React.Fragment>
      <div onClick={openDrawer}>{children}</div>
      <Drawer open={open} onClose={closeDrawer} className="p-4 bg-bgColor !text-secondary" placement="right">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5">
            DaffaStack
          </Typography>
          <IconButton variant="text" onClick={closeDrawer} className="text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div className="flex flex-col justify-between items-center h-fit">
        <Typography className="mb-8 pr-4 font-normal">
          Homepage
        </Typography>
        <Typography className="mb-8 pr-4 font-normal">
          About Me
        </Typography>
        <Typography className="mb-8 pr-4 font-normal">
          My Projects
        </Typography>
        <div className="flex gap-2">
          <OutlinedButton size="sm">
            Documentation
          </OutlinedButton>
          <DefaultButton size="sm">Contact Me</DefaultButton>
        </div>
        </div>
       


       
      </Drawer>
    </React.Fragment>
  );
}