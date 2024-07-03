import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
      <Toaster position="top-center" />
    </QueryClientProvider>
  </React.StrictMode>,
);

// ------------------------------

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { TooltipProvider } from '@radix-ui/react-tooltip';
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import App from './App';

// const queryClient = new QueryClient();

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <App />
//       </TooltipProvider>
//     </QueryClientProvider>
//   </React.StrictMode>,
// );
