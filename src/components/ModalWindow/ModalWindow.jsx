export default function ModalWindow({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div>
      <p>Modal</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
