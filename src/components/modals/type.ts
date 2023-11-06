import { ShareSocialModalProps } from "../Dashboard/ShareSocials";
import { DeleteModalProps } from "./DeleteModal";
import { FieldEditorModalProps } from "./FieldEditorModal";


export type ModalId = number;

export interface SharedBaseModalProps {
  state: boolean;
  closeModal: () => void;
}

export type NotificationModalProps = SharedBaseModalProps & {
  title: string
  description?: string
  illustration?: string
}


export type BaseModalProps = SharedBaseModalProps & {
  children: React.ReactNode;
  closeOnBackgroundClicked?: boolean;
};

export interface FieldEditorProp {
  [value: string]: string
}

// Modal Manger Types
export interface SharedModalObjProps {
  id: ModalId;
  callback: (result: any) => void;
}

export interface DeleteModalManagerProps extends SharedModalObjProps, Omit<DeleteModalProps, "sendResult"> {
  type: "confirm"
}

export interface SocialShareModalManagerProps extends SharedModalObjProps, Omit<ShareSocialModalProps, "sendResult"> {
  type: "social-share";
}

export interface FieldEditorModalMangerProps extends SharedModalObjProps, Omit<FieldEditorModalProps, "sendResult"> {
  type: "field-editor";
 
}
// export type for different export type of modal required details
export type AddConfirmModalArg = Omit<DeleteModalManagerProps, "id" | "callback">;
export type AddSocialShareModalArg = Omit<SocialShareModalManagerProps, "id" | "callback" >;
export type AddFieldEditorModalArg = Omit<FieldEditorModalMangerProps, "id" | "callback" >;

export type AddModalArg = AddConfirmModalArg | AddSocialShareModalArg | AddFieldEditorModalArg
export type ModalMangerModals = DeleteModalManagerProps | SocialShareModalManagerProps | FieldEditorModalMangerProps

// export type for addModal function in the modal manager context
export type AddModal = (modal: AddModalArg) => Promise<boolean | null>; 
