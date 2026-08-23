"use client";

import { useState } from "react";
import { Button, Field, TextInput } from "./fields";

export function NewDocModal({
  title,
  label,
  placeholder,
  busy,
  onCancel,
  onCreate,
}: {
  title: string;
  label: string;
  placeholder: string;
  busy: boolean;
  onCancel: () => void;
  onCreate: (value: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 p-5"
      onClick={(e) => e.target === e.currentTarget && onCancel()}
    >
      <form
        className="w-full max-w-[380px] rounded-2xl bg-white p-6 shadow-xl"
        onSubmit={(e) => {
          e.preventDefault();
          if (value.trim()) onCreate(value.trim());
        }}
      >
        <h3 className="text-[16px] font-semibold text-[#111]">{title}</h3>
        <div className="mt-4">
          <Field label={label}>
            <TextInput
              autoFocus
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
            />
          </Field>
        </div>
        <div className="flex justify-end gap-2.5">
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={busy || !value.trim()}>
            {busy ? "Creating…" : "Create"}
          </Button>
        </div>
      </form>
    </div>
  );
}
