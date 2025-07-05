'use client';
import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

interface PageLoaderProps {
  children: React.ReactNode;
  loadingDuration?: number;
  message?: string;
}

export default function PageLoader({ 
  children, 
  loadingDuration = 2000,
  message = "Carregando sua experiência de saúde..."
}: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, [loadingDuration]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} message={message} />
      {!isLoading && children}
    </>
  );
}