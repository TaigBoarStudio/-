
import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
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

// Added missing ChatMessage interface for chat history and consultant interactions
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
