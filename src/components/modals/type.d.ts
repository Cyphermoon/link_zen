type ModalId = number;

interface SharedBaseModalProps {
  state: boolean;
  closeModal: () => void;
}

type NotificationModalProps = SharedBaseModalProps & {
  title: string
  description?: string
  illustration?: string
}


type BaseModalProps = SharedBaseModalProps & {
  children: React.ReactNode;
  closeOnBackgroundClicked?: boolean;
};

// Modal Manger Types
interface SharedModalObjProps {
  id: ModalId;
  callback: (result: any) => void;
}

interface ModalProps extends SharedModalObjProps {
  type: "confirm"
  title: string;
  description?: string;
}

interface SocialShareModalProps extends SharedModalObjProps {
  type: "social-share";
  url: string;
  title: string;
  twitter: {
    related: string[];
    hashtags: string[];
  };
}
// type for different type of modal required details
type AddConfirmModalArg = Omit<ModalProps, "id" | "callback">;
type AddSocialShareModalArg = Omit<SocialShareModalProps, "id" | "callback" >;

type AddModalArg = AddConfirmModalArg | AddSocialShareModalArg

// type for addModal function in the modal manager context
type AddModal = (modal: AddModalArg) => Promise<boolean | null>; 
