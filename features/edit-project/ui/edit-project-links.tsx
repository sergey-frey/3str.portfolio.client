import { ProjectModel } from "@/shared/types";
import { UIInput } from "@/shared/ui";
import { GitHubIcon, OpenIcon } from "@/shared/ui/icons";
import { ChangeEvent, useState } from "react";

type EditProjectLinksProps = {
  label?: string;
  value: ProjectModel["links"];
  onChange: (links: ProjectModel["links"]) => void;
};

export const EditProjectLinks = ({
  value,
  label,
  onChange,
}: EditProjectLinksProps) => {
  const handleDeployChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newLinks = { ...value, deploy: e.target.value };
    onChange(newLinks);
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newLinks = { ...value, github: e.target.value };
    onChange(newLinks);
  };

  return (
    <div className="flex flex-col gap-1">
      <UIInput
        label={label}
        type="text"
        leftAddon={
          <OpenIcon className="w-5 h-5 self-center justify-self-center" />
        }
        value={value?.deploy ?? ""}
        onChange={handleDeployChange}
        title="Ссылка на демо иди готовый проект"
      />
      <UIInput
        type="text"
        leftAddon={
          <GitHubIcon className="w-5 h-5 self-center justify-self-center" />
        }
        value={value?.github ?? ""}
        onChange={handleGithubChange}
        title="Ссылка на Github проекта"
      />
    </div>
  );
};
