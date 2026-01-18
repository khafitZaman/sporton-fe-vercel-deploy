"use client";

import { useRef, useState } from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

type TFileUploadProps  = {
  onFileSelect?:(file: File | null) => void;
}

const FileUpload = ({onFileSelect}:TFileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (selectedFile?:File) =>{
    if(!selectedFile) return;
    setFile(selectedFile);
    onFileSelect?.(selectedFile);
  }
  const removeFile = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect?.(null);
  }
  return (
    <div className="flex flex-col justify-center items-center w-full py-6 border border-dashed border-primary bg-primary-light"
      onClick={() => fileInputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        handleFileChange(e.dataTransfer.files?.[0])
      }}>
      <input type="file" className="hidden" ref={fileInputRef} accept="image/*" onChange={(e) => handleFileChange(e.target.files?.[0])} />
      {
        !file ? (
          <div className="text-center my-5">
            <FiUploadCloud className="text-primary mx-auto" size={28}/>
            <p className="text-xs">Upload Your Payment Receipt Here</p>
          </div>
        ):(
          <div className="text-center">
            <FiImage className="text-primaru mx-auto mb-4" size={28}/>
            <p className="text-sm text-primary">{file.name}</p>
            <p className="text-sm text-gray-400">{(file.size/1024).toFixed(1)}KB</p>
            <button onClick={removeFile} className="flex gap-2 bg-primary/90 mt-4 text-white mx-auto rounded px-2">
              <FiTrash2 size={14} className="self-center"/> Remove
            </button>
          </div>
        )
      }
    </div>
  )
}

export default FileUpload;