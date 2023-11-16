import { UIInput } from "@/shared/ui";
import { GitHubIcon, OpenIcon } from "@/shared/ui/icons";
import { ChangeEvent } from "react";

type DeployLinkInputProps = {
  value: string;
  onChange: (link: string) => void;
};

export const DeployLinkInput = ({ value, onChange }: DeployLinkInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <UIInput
      type="text"
      leftAddon={
        <OpenIcon className="w-5 h-5 self-center justify-self-center" />
      }
      value={value ?? ""}
      onChange={handleChange}
      title="Ссылка на опубликованный проект"
    />
  );
};

type GithubLinkInputProps = {
  value: string;
  onChange: (link: string) => void;
};

export const GithubLinkInput = ({ value, onChange }: GithubLinkInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <UIInput
      type="text"
      leftAddon={
        <GitHubIcon className="w-5 h-5 self-center justify-self-center" />
      }
      value={value ?? ""}
      onChange={handleChange}
      title="Ссылка на Github проекта"
    />
  );
};
