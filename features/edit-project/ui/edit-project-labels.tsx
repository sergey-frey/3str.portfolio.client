"use client";

import { UIInput } from "@/shared/ui";
import {
  type InputHTMLAttributes,
  type KeyboardEvent,
  type ChangeEvent,
  useState,
} from "react";

type EditProjectLabelsProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labels: string[];
  onChange: (labels: string[]) => void;
  render: (label: string, deleteFunc: (label: string) => void) => JSX.Element;
};

export const EditProjectLabels = ({
  label,
  labels,
  onChange,
  render,
}: EditProjectLabelsProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const getLabelKey = (index: number) => `admin_edit_project_label_${index}`;

  const handleInputEnter = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      onChange([...labels, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleLabelClick = (label: string) => {
    const newLabels = labels.filter((l) => l !== label);

    console.log(newLabels);

    onChange(newLabels);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-2">
        <UIInput
          label={label}
          value={inputValue}
          placeholder="Пометки для проекта"
          onKeyDown={handleInputEnter}
          onChange={handleInputChange}
        />
        <ul className="flex gap-1 flex-wrap">
          {labels.map((label, i) => {
            return (
              <li key={getLabelKey(i)}>{render(label, handleLabelClick)}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
