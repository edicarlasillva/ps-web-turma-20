import { useState } from 'react'
import {
  Button,
  ButtonCancel,
  ButtonConfirm,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from './styles'

export function Modal() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleToggleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <ModalContainer>
      <Button onClick={handleToggleModal}>Abrir Modal</Button>

      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Confirmar compra</h2>
            <p>Tem certeza que deseja confirmar?</p>
            <p>
              Valor total: <strong>R$ 150,00</strong>
            </p>

            <ButtonConfirm onClick={handleToggleModal}>Confirmar</ButtonConfirm>
            <ButtonCancel onClick={handleToggleModal}>Cancelar</ButtonCancel>
          </ModalContent>
        </ModalOverlay>
      )}
    </ModalContainer>
  )
}
