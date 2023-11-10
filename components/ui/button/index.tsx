"use client"
import React, { ReactNode } from 'react'
import { Button } from "@material-tailwind/react"

type Size = "sm" | "md" | "lg";

type Props = {
  prefix?: React.ReactNode;
  children: ReactNode;
  suffix?: React.ReactNode;
  size?: Size;
  className?: string;
  fullWidth?: boolean
}

export const DefaultButton = ({ prefix, children, suffix, size, className, fullWidth }: Props) => {
  return (
    <Button variant='gradient' size={size} className={`!bg-primary !text-secondary ${className}`} fullWidth={fullWidth}>
      {prefix}
      {children}
      {suffix}
    </Button>
  )
}

export const OutlinedButton = ({ prefix, children, suffix, size, className, fullWidth }: Props) => {
  return (
      <Button variant='outlined' size={size} className={`border-primary text-secondary hover:bg-primary/10 focus:ring-transparent focus:ring-0 bg-bgColor ${className}`} fullWidth={fullWidth}>
        {prefix}
        {children}
        {suffix}
      </Button>
  )
}

export const TextButton = ({ prefix, children, suffix, size, className, fullWidth }: Props) => {
  return (
    <Button variant='text' size={size} className={className} fullWidth={fullWidth}>
      {prefix}
      {children}
      {suffix}
    </Button>
  )
}