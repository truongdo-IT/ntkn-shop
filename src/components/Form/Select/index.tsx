import cn from "classnames";
import React from "react";

import { Text } from "@/components/Typography";

import styles from "./styles.module.scss";

type Options = {
  value: string;
  label: React.ReactNode;
};

type SelectComponentProps = React.HTMLAttributes<HTMLSelectElement> & {
  id: string;
  name: string;
  options: Options[];
} & Text;

function SelectComponent(
  {
    id,
    name,
    options,
    fontSize = "fs-normal",
    fontWeight = "fw-normal",
    textColor = "txtClr-dark",
    italic = false,
    underline = false,
    textAlign = "center",
    textTransform,
    className = "",
    ...props
  }: SelectComponentProps,
  ref?: React.Ref<HTMLSelectElement>
) {
  const classes = cn(
    styles.select,
    styles[fontSize],
    styles[fontWeight],
    styles[textColor],
    styles[textAlign],
    italic ? styles.italic : "",
    underline ? styles.underline : "",
    textTransform ? styles[textTransform] : "",
    className
  );

  return (
    <select id={id} name={name} {...props} className={classes} ref={ref}>
      {options.map((option) => (
        <option key={option.value} value={option.value} className={styles.option}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

const Select = React.forwardRef<HTMLSelectElement, SelectComponentProps>(SelectComponent);

export default Select;
