import { ReactNode } from "react";

type AdminSkillsPageFacadeProps = {
  addSkillForm: ReactNode;
  skillsList: ReactNode;
};

export const AdminSkillsPageFacade = ({
  addSkillForm,
  skillsList,
}: AdminSkillsPageFacadeProps) => {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl">Добавить навык</h2>
        <div>{addSkillForm}</div>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-2xl">Все навыки</h2>
        <div>{skillsList}</div>
      </section>
    </div>
  );
};
