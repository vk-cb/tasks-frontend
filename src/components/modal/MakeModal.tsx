import { RxCross2 } from "react-icons/rx";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string
}

function MakeModal({ isOpen, onClose, children, className}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-xs  ">
      <div className={`bg-white border border-gray-300 p-6 rounded shadow-lg relative ${className}`}>
        <button className="absolute top-2 right-2 cursor-pointer text-red-500" onClick={onClose}>
          <RxCross2 size={28}/>
        </button>
        {children}
      </div>
    </div>
  );
}

export default MakeModal