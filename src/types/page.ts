import { LucideIcon } from "lucide-react";

export interface FormPage {
  id: string;
  text: string;
  icon: LucideIcon;
}

export interface ContextMenu {
  id: string;
  text: string;
  icon: LucideIcon;
  iconColor?: string;
}
