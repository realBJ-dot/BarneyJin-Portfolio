// app/providers.tsx - Client Component
'use client';
import { useEffect } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Import Bootstrap on the client side
    require('bootstrap/dist/css/bootstrap.min.css');
  }, []);

  return <>{children}</>;
}