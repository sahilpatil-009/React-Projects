import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const Model = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div  onClick={onClose} className="absolute top-0 z-40 h-screen w-screen backdrop-blur my-20">
          <div className="relative z-50 min-h-[200px] max-w-[80%] bg-white p-4 m-auto">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className=" self-end text-2xl" />
            </div>
            {children}
          </div>          
        </div>
      )}
    </>
  ,document.getElementById("model-root"));
};

export default Model;
