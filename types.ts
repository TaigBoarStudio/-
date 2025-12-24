
import { LucideIcon } from 'lucide-react';

// Added ChatMessage interface to fix the import error in geminiService.ts
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefit?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  url?: string;
  image?: string;
}

export enum NavLink {
  HOME = '#home',
  SERVICES = '#services',
  ABOUT = '#about',
  PORTFOLIO = '#portfolio',
  CONTACT = '#contact',
}

export interface NavigationProps {
  onNavigate: (view: 'home' | 'project') => void;
}

export const TELEGRAM_URL = "https://t.me/+V9KqBJXJBMYyMTdi";
