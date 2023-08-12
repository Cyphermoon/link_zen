interface SharedModalProps {
    state: boolean
    closeModal: () => void
  }
  
  type BaseModalProps = SharedModalProps & {
    children: React.ReactNode
    closeOnBackgroundClicked?: boolean
  }
  
  type NotificationModalProps = SharedModalProps & {
    title: string
    description?: string
    illustration?: string
  }

type ModalId = number

interface ModalProps {
  id: ModalId;
  type: "confirm";
  title: string;
  description?: string;
  callback: (result: any) => void;
}

interface AddModalArg extends Omit<ModalProps, "id" | "callback"> { }


