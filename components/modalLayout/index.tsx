import React from "react" 
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure
} from "@chakra-ui/react"

interface IProps {
  open: any,
  close: any,
  size: any,
  title: any,
  children: React.ReactNode
}

export default function ModalLayout(props: IProps) {
 
    let {
        open,
        close, 
        size,
        title,
        children
    } = props;   

    return (
        <Modal size={size ? size : "md"} scrollBehavior="inside" isCentered isOpen={open} onClose={close}>
        <ModalOverlay />
        <ModalContent backgroundColor="#0F1419" >
          <ModalHeader><p className=" text-p100 font-semibold text-[22px] w-[70%] " >{title}</p></ModalHeader>
          <ModalCloseButton />
          <ModalBody backgroundColor="#0F1419" margin="0px" padding="0px" >
            {children}
          </ModalBody> 
        </ModalContent>
      </Modal>
    )
}
