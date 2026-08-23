"use client";

import { Button } from "./fields";

export function ConfirmDialog({
  title,
  message,
  onCancel,
  onConfirm,
}: {
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 p-5"
      onClick={(e) => e.target === e.currentTarget && onCancel()}
    >
      <div className="w-full max-w-[380px] rounded-2xl bg-white p-6 shadow-xl">
        <h3 className="text-[16px] font-semibold text-[#111]">{title}</h3>
        <p className="mt-2 text-[13.5px] leading-[1.55] text-[#6B7280]">{message}</p>
        <div className="mt-5 flex justify-end gap-2.5">
          <Button variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
