import "@/styles/global.css"

import { StatusBar } from 'expo-status-bar';
import { SignIn } from '@/app/SignIn';

export default function App() {
  return (
    <>
      <SignIn />
      <StatusBar style="light" />
    </>
  );
}

