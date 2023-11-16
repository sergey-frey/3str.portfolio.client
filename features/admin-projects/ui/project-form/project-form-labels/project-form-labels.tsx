"use client";

import { UIInput } from "@/shared/ui";
import {
  type InputHTMLAttributes,
  type KeyboardEvent,
  type ChangeEvent,
  useState,
} from "react";

type ProjectFormLabelsProps = InputHTMLAttributes<HTMLInputElement> & {
  labels: string[];
  onChange: (labels: string[]) => void;
  render: (label: string, deleteFunc: (label: string) => void) => JSX.Element;
};

export const ProjectFormLabels = ({
  labels,
  onChange,
  render,
}: ProjectFormLabelsProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const getLabelKey = (index: number) => `admin_edit_project_label_${index}`;

  const handleInputEnter = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimValue = inputValue.trim();
      const isRepeat = labels.includes(trimValue);
      if (trimValue && !isRepeat) {
        onChange([...labels, trimValue]);
      }

      setInputValue("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleLabelClick = (label: string) => {
    const newLabels = labels.filter((l) => l !== label);
    onChange(newLabels);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-2">
        <UIInput
          type="text"
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
