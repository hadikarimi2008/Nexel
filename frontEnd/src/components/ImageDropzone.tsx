"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePlus } from "lucide-react";

const maxSize = 2 * 1024 * 1024;

type ImageDropzoneProps = {
  name?: string;
  currentImage?: string | null;
  onImageSelect?: (file: File | null) => void;
};

export default function ImageDropzone({
  name = "image",
  currentImage = null,
  onImageSelect,
}: ImageDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileInfo, setFileInfo] = useState("");
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  function clear() {
    if (inputRef.current) inputRef.current.value = "";

    setPreview(null);
    setFileInfo("");
    setError("");
    onImageSelect?.(null);
  }

  function handleFiles(files: FileList | null) {
    setError("");

    const file = files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      clear();
      return setError("Only image files are allowed.");
    }

    if (file.size > maxSize) {
      clear();
      return setError("Image must be smaller than 2 MB.");
    }

    setPreview(URL.createObjectURL(file));
    setFileInfo(`${file.name} · ${Math.round(file.size / 1024)} KB`);
    onImageSelect?.(file);
  }

  const shown = preview ?? currentImage;

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-nexel-sage">Image</span>

      <label
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        className={`relative flex aspect-[4/3] cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-dashed text-center focus-within:border-nexel-sage ${
          dragging ? "border-nexel-sage bg-nexel-gray/40" : "border-nexel-gray"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          name={name}
          accept="image/*"
          onChange={(e) => handleFiles(e.target.files)}
          className="sr-only"
        />

        {shown ? (
          <>
            <img
              src={shown}
              alt="Product"
              className="pointer-events-none absolute inset-0 h-full w-full object-contain p-2"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-nexel-dark/80 py-2 text-xs text-nexel-cream">
              Click or drop to replace
            </span>
          </>
        ) : (
          <>
            <ImagePlus
              size={32}
              strokeWidth={1.2}
              className="pointer-events-none text-nexel-sage"
            />
            <p className="pointer-events-none text-sm text-nexel-cream">
              Drag & drop an image here
            </p>
            <p className="pointer-events-none text-xs text-nexel-sage">
              or click to browse · PNG, JPG, WEBP up to 2 MB
            </p>
          </>
        )}
      </label>

      {(preview || error) && (
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className={error ? "text-red-400" : "text-nexel-sage"}>
            {error || fileInfo}
          </span>

          {preview && (
            <button type="button" onClick={clear} className="text-nexel-cream">
              Remove
            </button>
          )}
        </div>
      )}
    </div>
  );
}
