'use client';
import ToastProvider from '@/hooks/Custom/Toast/ToastProvider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

function GlobalProvider({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );
  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>
        <ToastProvider>{children}</ToastProvider>
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default GlobalProvider;
