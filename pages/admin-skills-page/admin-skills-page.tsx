import { SkillsList } from "@/features/admin-skills";
import { AdminSkillsPageFacade } from "./facades/admin-skills-page-facade";
import { AddSkillForm } from "@/features/admin-skills/ui/add-skill-form";

export const AdminSkillsPage = () => {
  return (
    <AdminSkillsPageFacade
      addSkillForm={<AddSkillForm />}
      skillsList={<SkillsList />}
    />
  );
};
