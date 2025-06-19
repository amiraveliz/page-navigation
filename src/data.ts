import {
  Info,
  FileText,
  CircleCheck,
  LucideIcon,
  Flag,
  PencilLine,
  Copy,
  Clipboard,
} from "lucide-react";

export interface FormPage {
  id: string;
  text: string;
  icon: LucideIcon;
}

export const DEFAULT_FORM_PAGES: FormPage[] = [
  { id: "1", text: "Info", icon: Info },
  { id: "2", text: "Details", icon: FileText },
  { id: "3", text: "Other", icon: FileText },
  { id: "4", text: "Ending", icon: CircleCheck },
];

export interface ContextMenu {
  id: string;
  text: string;
  icon: LucideIcon;
  iconColor?: string;
}

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
