import { ImageIcon } from "@/shared/ui/icons";
import clsx from "clsx";
import { KeyboardEvent, ReactNode, useId } from "react";

type ProjectFormImageFacadeProps = {
  handleLabelPressEnter: (e: KeyboardEvent<HTMLLabelElement>) => void;
  fileInputId: string;
  fileInput: ReactNode;
  preventImage: ReactNode;
  preview: ReactNode;
};

export const ProjectFormImageFacade = ({
  handleLabelPressEnter,
  fileInputId,
  fileInput,
  preventImage,
  preview,
}: ProjectFormImageFacadeProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        className={clsx(
          "flex items-center gap-4 cursor-pointer",
          "bg-neutral-1 px-4 py-4 rounded-lg transition-colors focused border-dashed border-2 border-primary-500",
          "hover:bg-neutral-500",
        )}
        htmlFor={fileInputId}
        tabIndex={0}
        onKeyDown={handleLabelPressEnter}
      >
        {fileInput}
        <ImageIcon className="text-primary-500" />
        <p>Выбрать файл</p>
      </label>
      <div className="mt-1 flex justify-between">
        <div className="flex flex-col gap-2 w-1/2 max-w-[250px]">
          <p className="px-2 py-1 rounded-md border-[1px] border-primary-500 bg-primary-500/20 text-primary-300">
            Было
          </p>
          {preventImage}
        </div>

        <div className="flex flex-col gap-2 w-1/2 max-w-[250px]">
          <p className="px-2 py-1 rounded-md border-[1px] border-primary-500 bg-primary-500/20 text-primary-300">
            Станет
          </p>
          {preview}
        </div>
      </div>
    </div>
  );
};
