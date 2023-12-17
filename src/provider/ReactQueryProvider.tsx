'use client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
