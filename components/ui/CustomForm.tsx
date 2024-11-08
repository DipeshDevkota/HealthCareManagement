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
  }

const CustomForm = ({control,fieldType,name}:CustomProps) => {
  return (
    <FormField
    control={control}
    name="name"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="shadcn" {...field} />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
  )
}

export default CustomForm
