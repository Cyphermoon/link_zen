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

export interface ModalProps extends SharedModalObjProps {
  type: "confirm"
  title: string;
  description?: string;
}

export interface SocialShareModalProps extends SharedModalObjProps {
  type: "social-share";
  url: string;
  title: string;
  twitter: {
    related: string[];
    hashtags: string[];
  };
}

export interface FieldEditorModalMangerProps extends SharedModalObjProps, Omit<FieldEditorModalProps, "sendResult"> {
  type: "field-editor";
 
}
// export type for different export type of modal required details
export type AddConfirmModalArg = Omit<ModalProps, "id" | "callback">;
export type AddSocialShareModalArg = Omit<SocialShareModalProps, "id" | "callback" >;
export type AddFieldEditorModalArg = Omit<FieldEditorModalMangerProps, "id" | "callback" >;

export type AddModalArg = AddConfirmModalArg | AddSocialShareModalArg | AddFieldEditorModalArg
export type ModalMangerModals = ModalProps | SocialShareModalProps | FieldEditorModalMangerProps

// export type for addModal function in the modal manager context
export type AddModal = (modal: AddModalArg) => Promise<boolean | null>; 
