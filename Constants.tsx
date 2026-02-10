import React from 'react';
import { Home, User, GraduationCap, Send, Github, Linkedin } from 'lucide-react';
import { FamilyMember, EducationInfo } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
  { name: 'About', path: '/about', icon: <User className="w-4 h-4" /> },
  { name: 'Education', path: '/education', icon: <GraduationCap className="w-4 h-4" /> },
  { name: 'Contact', path: '/contact', icon: <Send className="w-4 h-4" /> },
];

export const FAMILY_DATA: FamilyMember[] = [
  { id: 1, role: 'Father', description: 'The foundational strength and a constant source of resilience.' },
  { id: 2, role: 'Mother', description: 'The heart of our home, teaching the true meaning of patience.' },
  { id: 3, role: 'Elder Brother', description: 'A protective guide and mentor in my technical journey.' },
  { id: 4, role: 'Elder Sister', description: 'The wisdom and grace that balances our household.' },
  { id: 5, role: 'Sister', description: 'A creative spirit and my closest companion in dreaming.' },
  { id: 6, role: 'Khadiza', description: 'That is me—a student of machines and an architect of my own destiny.' },
  { id: 7, role: 'Younger Sibling', description: 'The energy and joy that keeps our family spirit young.' },
];

export const EDUCATION_DATA: EducationInfo = {
  institution: 'Comilla Polytechnic Institute',
  department: 'Mechanical Technology',
  status: 'Running Student',
  year: 'Current Academic Session'
};

export const SOCIAL_LINKS = [
  { name: 'Telegram', icon: <Send className="w-5 h-5" />, url: 'https://t.me/khadiza_houqe', color: 'text-blue-400' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: '#', color: 'text-blue-600' },
  { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: '#', color: 'text-zinc-800 dark:text-zinc-200' },
];
