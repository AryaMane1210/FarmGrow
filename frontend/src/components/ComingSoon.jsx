// src/components/ComingSoon.jsx
import React from "react";
export default function ComingSoon({ label }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-500">
      <span className="text-2xl font-semibold">{label}</span>
      <span className="mt-4">Coming soon...</span>
    </div>
  );
}
