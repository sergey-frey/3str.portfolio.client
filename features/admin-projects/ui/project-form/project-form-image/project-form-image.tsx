"use client";

import Image from "next/image";
import { ChangeEvent, useId, useRef, type KeyboardEvent } from "react";
import { usePreview } from "../../../model/use-preview";
import { ProjectFormModel } from "../../../types/form";
import { ProjectFormImageFacade } from "./project-form-image-facade";

type ProjectFormImageProps = {
  value: ProjectFormModel["image"];
  onChange: (image: ProjectFormModel["image"]) => void;
  prevImageURL: string;
};

export const ProjectFormImage = ({
  value,
  onChange,
  prevImageURL,
}: ProjectFormImageProps) => {
  const fileInputId = useId();
  const preview = usePreview(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelectFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length) {
      onChange(files[0]);
    } else {
      onChange(prevImageURL);
    }
  };

  const handleLabelPressEnter = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      inputRef.current.click();
    }
  };

  const getPreventImage = () => {
    if (!prevImageURL) {
      return null;
    }

    const prevImagePath = `/api/${prevImageURL}`;

    return (
      <Image
        src={prevImagePath}
        alt="Первое изображение"
        width={250}
        height={160}
        className="object-contain rounded-lg"
      />
    );
  };

  const getPreview = () => {
    if (!preview) {
      return getPreventImage();
    }

    return (
      <Image
        src={preview}
        alt="Второе изображение"
        width={250}
        height={160}
        className="object-contain rounded-lg"
      />
    );
  };

  return (
    <ProjectFormImageFacade
      handleLabelPressEnter={handleLabelPressEnter}
      fileInputId={fileInputId}
      fileInput={
        <input
          key={String(value)}
          type="file"
          id={fileInputId}
          onChange={handleSelectFile}
          accept="image/*"
          ref={inputRef}
          hidden
        />
      }
      preventImage={getPreventImage()}
      preview={getPreview()}
    />
  );
};
