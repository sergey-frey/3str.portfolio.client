import { UIButton, UIButtonProps, UIModal } from "@/shared/ui";
import { UIModalProps } from "@/shared/ui/ui-modal";

export type ConfirmAction = {
  type: "confirm" | "not-confirm";
  label: string;
};

export type ConfirmOptions = {
  title: string;
  message: string;
  actions: ConfirmAction[];
  onConfirm: () => void;
};

export type ConfirmProps = ConfirmOptions & UIModalProps;

export const Confirm = ({
  title,
  message,
  actions,
  onConfirm,
  onClose,
  ...props
}: ConfirmProps) => {
  return (
    <UIModal {...props} onClose={onClose}>
      <UIModal.Header>{title}</UIModal.Header>
      <UIModal.Body>{message}</UIModal.Body>
      <UIModal.Footer className="gap-2">
        {actions.map((action, i) => {
          const color: Record<ConfirmAction["type"], UIButtonProps["color"]> = {
            confirm: "primary",
            "not-confirm": "neutral",
          };

          const onClick = action.type === "confirm" ? onConfirm : onClose;

          return (
            <UIButton
              key={`confirm_action_${i}`}
              color={color[action.type]}
              size="sm"
              onClick={onClick}
            >
              {action.label}
            </UIButton>
          );
        })}
      </UIModal.Footer>
    </UIModal>
  );
};
