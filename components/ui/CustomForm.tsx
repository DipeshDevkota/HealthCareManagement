"use client"
import { Input } from "@/components/ui/input";

import {
    
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";

  import { Control } from "react-hook-form";
import { formFieldType } from "../forms/PatientForm";

  interface CustomProps{
    control:Control<any>,
    fieldType:formFieldType
    name:string,
    label?:string,
    placeholder?:string,
    iconSrc?:string,
    iconAlt?:string,
    disabled?:boolean,
    dateFormat?:string,
    showTimeSelect?:boolean,
    children?:React.ReactNode,
    renderSkeleton?:(field:any)=> React.ReactNode,

  }

const CustomForm = ({control,fieldType,name,label}:CustomProps) => {
  return (
    <FormField
    control={control}
    name="name"
    render={({ field }) => (
      <FormItem>
{fieldType !==formFieldType.CHECKBOX && label (
    <FormLabel>{label}</FormLabel>
)}
      </FormItem>
    )}
  />
  )
}

export default CustomForm
