import React, { useRef } from "react";

interface TextareaProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  value?: string;
}

const Textarea: React.FC<TextareaProps> = ({ className, onChange, placeholder, value }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; 
      textarea.style.height = `${textarea.scrollHeight}px`; 
    }
    onChange && onChange(e);
  };

  return (
    <textarea
      ref={textareaRef}
      rows={1}
      className={`w-full p-2 resize-none transition-all overflow-hidden ${className}`}
      placeholder={placeholder || "Type here..."}
      onChange={handleInput}
      value={value}
    />
  );
};

export default Textarea;
