import { format } from "date-fns";

export const dateFormat = (x: any, type?: string) => { 
  if(type === "time"){
    return  format(
      new Date(x),
      'h:m	aaa'
    )
  } else { 
    return  format(
      new Date(x),
      'EEEE, do MMM'
    )
  }
};