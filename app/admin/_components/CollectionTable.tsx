"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, Pencil } from "lucide-react";
import { ConfirmDialog } from "./ConfirmDialog";
import { useToast } from "./Toast";
import { api } from "../_lib/api";

export interface CollectionRow {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  published: boolean;
  editHref: string;
}

export function CollectionTable({
  rows,
  deleteEndpoint,
  onDeleted,
  emptyLabel,
}: {
  rows: CollectionRow[];
  deleteEndpoint: (id: string) => string;
  onDeleted: (id: string) => void;
  emptyLabel: string;
}) {
  const toast = useToast();
  const [pendingDelete, setPendingDelete] = useState<CollectionRow | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function confirmDelete() {
    if (!pendingDelete) return;
    setDeletingId(pendingDelete._id);
    try {
      await api(deleteEndpoint(pendingDelete._id), { method: "DELETE" });
      onDeleted(pendingDelete._id);
      toast(`Deleted "${pendingDelete.title}".`);
    } catch (err) {
      toast(err instanceof Error ? err.message : "Delete failed.", "error");
    } finally {
      setDeletingId(null);
      setPendingDelete(null);
    }
  }

  if (rows.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-[#D4D4D4] bg-white py-14 text-center">
        <p className="text-[14px] text-[#6B7280]">{emptyLabel}</p>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-[#E5E5E5] bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#E5E5E5] bg-[#FAFAFA]">
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
                Title
              </th>
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
                URL
              </th>
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
                Status
              </th>
              <th className="px-4 py-2.5" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row._id} className="border-b border-[#F0F0F0] last:border-b-0 hover:bg-[#FAFAFA]">
                <td className="px-4 py-3">
                  <Link href={row.editHref} className="text-[13.5px] font-semibold text-[#111] hover:underline">
                    {row.title}
                  </Link>
                  {row.subtitle && <p className="mt-0.5 text-[12px] text-[#9CA3AF]">{row.subtitle}</p>}
                </td>
                <td className="px-4 py-3 font-mono text-[12.5px] text-[#6B7280]">/{row.slug}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold ${
                      row.published ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#F3F4F6] text-[#6B7280]"
                    }`}
                  >
                    {row.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-1">
                    <Link
                      href={row.editHref}
                      className="flex h-7 w-7 items-center justify-center rounded-md text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111]"
                    >
                      <Pencil size={14} />
                    </Link>
                    <button
                      onClick={() => setPendingDelete(row)}
                      disabled={deletingId === row._id}
                      className="flex h-7 w-7 items-center justify-center rounded-md text-[#6B7280] hover:bg-[#FEF2F2] hover:text-[#B91C1C]"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pendingDelete && (
        <ConfirmDialog
          title={`Delete "${pendingDelete.title}"?`}
          message="This removes the page from the site immediately. This can't be undone."
          onCancel={() => setPendingDelete(null)}
          onConfirm={confirmDelete}
        />
      )}
    </>
  );
}
