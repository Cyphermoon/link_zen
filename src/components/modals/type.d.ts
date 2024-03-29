interface SharedModalProps {
    state: boolean
    closeModal: () => void
  }
  
  type BaseModalProps = SharedModalProps & {
    children: React.ReactNode
  }
  
  type NotificationModalProps = SharedModalProps & {
    title: string
    description?: string
    illustration?: string
  }

