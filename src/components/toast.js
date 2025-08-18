"use client";

import { useState, useEffect } from "react";

function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto close after 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-5 right-5 rounded-xl px-4 py-2 shadow-lg text-white transition-opacity
        ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
    >
      {message}
    </div>
  );
}

export default function ToastExample() {
  const [toast, setToast] = useState(null);

  const showToast = (msg, type) => {
    setToast({ message: msg, type });
  };

  return (
    <div className="p-6">
      <button
        onClick={() => showToast("Saved successfully!", "success")}
        className="mr-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow"
      >
        Show Success
      </button>

      <button
        onClick={() => showToast("Something went wrong!", "error")}
        className="rounded-lg bg-red-600 px-4 py-2 text-white shadow"
      >
        Show Error
      </button>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
