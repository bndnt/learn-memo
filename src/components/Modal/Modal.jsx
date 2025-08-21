import { useToggle } from "../../hooks/useToggle";
import ModalWindow from "../ModalWindow/ModalWindow";
export default function Modal() {
  const { isOpen, open, close } = useToggle(true);
  return (
    <div>
      <button onClick={open}>Open modal</button>
      <ModalWindow isOpen={isOpen} onClose={close} />
    </div>
  );
}
