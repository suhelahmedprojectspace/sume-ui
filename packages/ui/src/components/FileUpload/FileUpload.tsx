"use client";

import { File, X, UploadCloud, ImageIcon, Trash2, Loader2 } from "lucide-react";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FileData {
  name: string;
  type: string;
  size: number;
  preview?: string;
  lastModified?: number;
}

const FileUpload = () => {
  const [files, setFiles] = useState<FileData[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const MAX_TOTAL_SIZE = 50 * 1024 * 1024; // 50MB
  const MAX_FILE_COUNT = 10;

  // Load from localStorage on mount
  useEffect(() => {
    setIsLoading(true);
    try {
      const savedFiles = localStorage.getItem("uploadedFiles");
      if (savedFiles) {
        setFiles(JSON.parse(savedFiles));
      }
    } catch (e) {
      setError("Failed to load saved files");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("uploadedFiles", JSON.stringify(files));
    } catch (e) {
      setError("Storage is full. Couldn't save files.");
    }
  }, [files]);

  // Cleanup object URLs
  useEffect(() => {
    return () => {
      files.forEach(file => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [files]);

  // Add files helper
  const addFiles = useCallback((newFiles: FileList) => {
    let totalSize = files.reduce((sum, file) => sum + file.size, 0);
    const fileArray: FileData[] = [];
    const errors: string[] = [];

    Array.from(newFiles).forEach((file) => {
      // Validation checks
      if (files.length + fileArray.length >= MAX_FILE_COUNT) {
        errors.push(`Maximum of ${MAX_FILE_COUNT} files allowed`);
        return;
      }
      
      if (file.size > MAX_FILE_SIZE) {
        errors.push(`"${file.name}" exceeds 5MB limit`);
        return;
      }
      
      if (totalSize + file.size > MAX_TOTAL_SIZE) {
        errors.push(`Total storage limit (50MB) exceeded`);
        return;
      }
      
      totalSize += file.size;

      const isImage = file.type.startsWith("image/");
      fileArray.push({
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModified,
        preview: isImage ? URL.createObjectURL(file) : undefined
      });
    });

    if (errors.length > 0) {
      // setError(errors[0]);
      setTimeout(() => setError(null), 5000);
    }

    if (fileArray.length > 0) {
      setFiles(prev => [...prev, ...fileArray]);
    }
  }, [files]);

  // Drag & Drop Handlers
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isDragging) setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(e.dataTransfer.files);
    }
  };

  // Manual file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(e.target.files);
      // Reset input to allow re-uploading same files
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  // Remove file
  const removeFile = (index: number) => {
    const fileToRemove = files[index];
    if (fileToRemove?.preview) {
      URL.revokeObjectURL(fileToRemove.preview);
    }
    
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  // Clear all files
  const clearAllFiles = () => {
    files.forEach(file => {
      if (file.preview) {
        URL.revokeObjectURL(file.preview);
      }
    });
    setFiles([]);
  };

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  // Get file icon based on type
  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return <ImageIcon className="w-8 h-8 text-blue-500" />;
    if (type.includes("pdf")) return <File className="w-8 h-8 text-red-500" />;
    if (type.includes("zip") || type.includes("compressed")) return <File className="w-8 h-8 text-yellow-500" />;
    return <File className="w-8 h-8 text-gray-500" />;
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">File Upload</h2>
        {files.length > 0 && (
          <button 
            onClick={clearAllFiles}
            className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 transition-colors"
            aria-label="Clear all files"
          >
            <Trash2 size={16} />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`w-full p-8 border-2 border-dashed rounded-xl transition-all duration-300 ease-in-out cursor-pointer
          ${isDragging 
            ? "border-blue-500 bg-blue-50 scale-[1.02]" 
            : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"}
          relative overflow-hidden`}
        aria-label="File upload area"
        aria-describedby="upload-instructions"
        role="region"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            fileInputRef.current?.click();
          }
        }}
      >
        <label className="w-full h-full flex flex-col justify-center items-center cursor-pointer">
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileUpload}
            className="hidden"
            multiple
            accept="image/*, .pdf, .doc, .docx, .xls, .xlsx, .zip"
            aria-hidden="true"
          />
          <div className="flex flex-col items-center gap-3 text-center">
            <UploadCloud 
              className={`w-12 h-12 transition-colors ${
                isDragging ? "text-blue-500" : "text-gray-400"
              }`}
              aria-hidden="true"
            />
            <div className="space-y-1">
              <p className="text-gray-700 font-medium">
                {isDragging ? "Drop files here" : "Click or drag files to upload"}
              </p>
              <p 
                id="upload-instructions"
                className="text-sm text-gray-500"
              >
                Supports images, documents, archives. Max 5MB per file
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {files.length} / {MAX_FILE_COUNT} files •{" "}
                {formatFileSize(files.reduce((sum, file) => sum + file.size, 0))} of 50MB used
              </p>
            </div>
          </div>
        </label>
        
        {/* Animated background effect */}
        {isDragging && (
          <motion.div 
            className="absolute inset-0 bg-blue-100 opacity-30 z-[-1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-2"
            role="alert"
          >
            <X className="flex-shrink-0 mt-0.5 w-5 h-5" />
            <span className="text-sm">{error}</span>
            <button 
              onClick={() => setError(null)} 
              className="ml-auto"
              aria-label="Dismiss error"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* File Previews */}
      {isLoading ? (
        <div className="w-full flex justify-center py-10">
          <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
        </div>
      ) : files.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full py-12 flex flex-col items-center justify-center gap-3 text-gray-500 rounded-xl border border-dashed border-gray-200"
        >
          <File className="w-12 h-12" />
          <p className="font-medium">No files uploaded yet</p>
          <p className="text-sm max-w-md text-center">
            Your uploaded files will appear here. Supported formats include JPG, PNG, PDF, DOC, XLS, ZIP.
          </p>
        </motion.div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full"
        >
          <AnimatePresence>
            {files.map((file, index) => (
              <motion.div
                layout
                key={`${file.name}-${file.lastModified}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative bg-gray-50 rounded-lg overflow-hidden shadow group hover:shadow-md transition-shadow"
              >
                {file.preview ? (
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={file.preview}
                      alt={file.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-square flex flex-col items-center justify-center gap-2 p-4 text-center">
                    {getFileIcon(file.type)}
                    <span className="text-xs font-medium truncate max-w-full px-2">
                      {file.name}
                    </span>
                  </div>
                )}

                <div className="p-3">
                  <div className="flex justify-between items-start gap-2">
                    <div className="min-w-0">
                      <p 
                        className="text-sm font-medium truncate"
                        title={file.name}
                      >
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-gray-500 hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-200 rounded-full p-1"
                      aria-label={`Remove ${file.name}`}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                {/* Progress bar for upload simulation */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Storage indicator */}
      {files.length > 0 && (
        <div className="w-full mt-2">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Storage used</span>
            <span>
              {formatFileSize(files.reduce((sum, file) => sum + file.size, 0))} / 50MB
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ 
                width: `${Math.min(
                  (files.reduce((sum, file) => sum + file.size, 0) / MAX_TOTAL_SIZE) * 100, 
                  100
                )}%` 
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

FileUpload.displayName = "FileUpload";
export { FileUpload };