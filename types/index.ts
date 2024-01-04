"use server"
import { MouseEventHandler } from "react"

export interface CostumButtonProps{
    title: string,
    containerStyles?: string
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}
