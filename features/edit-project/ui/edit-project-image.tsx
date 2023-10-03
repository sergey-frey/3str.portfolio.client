"use client";

import { classes } from "@/shared/lib";
import { ProjectFormModel } from "@/shared/types/project-form-model";
import { ImageIcon } from "@/shared/ui/icons";
import Image from "next/image";
import { ChangeEvent, useId, useRef, type KeyboardEvent } from "react";
import { usePreview } from "../hooks/use-preview";

type EditProjectImageProps = {
  value: ProjectFormModel["image"];
  onChange: (image: ProjectFormModel["image"]) => void;
  prevImageURL: string;
};

export const EditProjectImage = ({
  value,
  onChange,
  prevImageURL,
}: EditProjectImageProps) => {
  const id = useId();
  const preview = usePreview(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const getUUPath = () => `${prevImageURL}&p=${Date.now()}`;

  const handleSelectFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length) {
      onChange(files[0]);
    } else {
      onChange(null);
    }
  };

  const handleLabelPressEnter = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <label
        className={classes(
          "flex items-center gap-4 cursor-pointer",
          "bg-neutral-1 px-4 py-4 rounded-lg transition-colors focused border-dashed border-2 border-primary-500",
          "hover:bg-neutral-500"
        )}
        htmlFor={id}
        tabIndex={0}
        onKeyDown={handleLabelPressEnter}
      >
        <input
          key={String(value?.name)}
          type="file"
          id={id}
          onChange={handleSelectFile}
          accept="image/*"
          ref={inputRef}
          hidden
        />
        <ImageIcon className="text-primary-500" />
        <p>Выбрать файл</p>
      </label>
      <div className="mt-1 flex justify-between">
        <div className="flex flex-col gap-2 w-1/2 max-w-[250px]">
          <p className="px-2 py-1 rounded-md border-[1px] border-primary-500 bg-primary-500/20 text-primary-300">
            Было
          </p>
          <Image
            src={getUUPath()}
            alt="Первое изображение"
            width={250}
            height={160}
            className="object-contain rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-2 w-1/2 max-w-[250px]">
          <p className="px-2 py-1 rounded-md border-[1px] border-primary-500 bg-primary-500/20 text-primary-300">
            Станет
          </p>
          {preview && (
            <Image
              src={preview}
              alt="Второе изображение"
              width={250}
              height={160}
              className="object-contain rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};
