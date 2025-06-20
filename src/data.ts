import {
  Info,
  FileText,
  CircleCheck,
  Flag,
  PencilLine,
  Copy,
  Clipboard,
} from "lucide-react";
import { ContextMenu, FormPage } from "./types/page";

export const DEFAULT_FORM_PAGES: FormPage[] = [
  { id: crypto.randomUUID(), text: "Info", icon: Info },
  { id: crypto.randomUUID(), text: "Details", icon: FileText },
  { id: crypto.randomUUID(), text: "Other", icon: FileText },
  { id: crypto.randomUUID(), text: "Ending", icon: CircleCheck },
];

export const CONTEXT_MENU_ITEMS: ContextMenu[] = [
  {
    id: "1",
    text: "Set as first page",
    icon: Flag,
    iconColor: "stroke-blue",
  },
  {
    id: "2",
    text: "Rename",
    icon: PencilLine,
  },
  {
    id: "3",
    text: "Copy",
    icon: Copy,
  },
  {
    id: "4",
    text: "Duplicate",
    icon: Clipboard,
  },
];
