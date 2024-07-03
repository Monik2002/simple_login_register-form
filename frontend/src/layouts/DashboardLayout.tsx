// import { Link, Outlet } from 'react-router-dom'
// import {
//   Home,
//   LineChart,
//   Package,
//   Package2,
//   Settings,
//   // ShoppingCart,
//   Users2,
// } from "lucide-react"

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip"

// import {
//   PanelLeft,
//   Search,
// } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// // import Avvvatars from "avvvatars-react";

// const DashboardLayout = () => {
//   return (
//     <div className="flex min-h-screen w-full flex-col bg-muted/40">
//       <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
//         <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
//           {/* <Link
//             to={'/'}
//             className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
//           >
//             <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
//           </Link> */}
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link
//                 to={'/'}
//                 className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
//               >
//                 <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent side="right">JAI JAGADAMBA STORE</TooltipContent>
//           </Tooltip>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link
//                 to={'/'}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//               >
//                 <Home className="h-5 w-5" />
//                 <span className="sr-only">Dashboard</span>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent side="right">Dashboard</TooltipContent>
//           </Tooltip>
//           {/* <Tooltip>
//             <TooltipTrigger asChild>
//               <Link
//                 to="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//               >
//                 <ShoppingCart className="h-5 w-5" />
//                 <span className="sr-only">Orders</span>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent side="right">Orders</TooltipContent>
//           </Tooltip> */}
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link
//                 to={'/products'}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//               >
//                 <Package className="h-5 w-5" />
//                 <span className="sr-only">Products</span>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent side="right">Products</TooltipContent>
//           </Tooltip>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link
//                 to={'/customers'}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//               >
//                 <Users2 className="h-5 w-5" />
//                 <span className="sr-only">Customers</span>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent side="right">Customers</TooltipContent>
//           </Tooltip>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link
//                 to={'/sales'}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//               >
//                 <LineChart className="h-5 w-5" />
//                 <span className="sr-only">Analytics</span>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent side="right">Analytics</TooltipContent>
//           </Tooltip>
//         </nav>
//         <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link
//                 to={'/settings'}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
//               >
//                 <Settings className="h-5 w-5" />
//                 <span className="sr-only">Settings</span>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent side="right">Settings</TooltipContent>
//           </Tooltip>
//         </nav>
//       </aside>
//       <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
//         <header className="sticky top-0 z-30 flex h-14
//         items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button size="icon" variant="outline" className="sm:hidden">
//                 <PanelLeft className="h-5 w-5" />
//                 <span className="sr-only">Toggle Menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="sm:max-w-xs">
//               <nav className="grid gap-6 text-lg font-medium">
//                 <Link
//                   to="#"
//                   className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
//                 >
//                   <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
//                   <span className="sr-only">JAI JAGADAMBA STORE</span>
//                 </Link>
//                 <Link
//                   to={'/'}
//                   className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
//                 >
//                   <Home className="h-5 w-5" />
//                   Dashboard
//                 </Link>
//                 {/* <Link
//                   to="#"
//                   className="flex items-center gap-4 px-2.5 text-foreground"
//                 >
//                   <ShoppingCart className="h-5 w-5" />
//                   Orders
//                 </Link> */}
//                 <Link
//                   to={'/products'}
//                   className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
//                 >
//                   <Package className="h-5 w-5" />
//                   Products
//                 </Link>
//                 {/* Analytics  */}
//                 <Link
//                   to={'/sales'}
//                   className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
//                 >
//                   <LineChart className="h-5 w-5" />
//                   Analytics
//                 </Link>
//                 <Link
//                   to={'/customers'}
//                   className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
//                 >
//                   <Users2 className="h-5 w-5" />
//                   Customers
//                 </Link>
//                 <Link
//                   to={'/settings'}
//                   className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
//                 >
//                   <LineChart className="h-5 w-5" />
//                   Settings
//                 </Link>
//               </nav>
//             </SheetContent>
//           </Sheet>
//           <div className="relative ml-auto flex-1 md:grow-0">
//             <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//             <Input
//               type="search"
//               placeholder="Search..."
//               className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
//             />
//           </div>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="overflow-hidden rounded-full"
//               >
//                 {/* <img src="https://avatars.dicebear.com/api/avataaars/jai.svg" alt="avatar" className="h-9 w-9" /> */}
//                 {/* <Avvvatars value={userEmail} style="shape" size={36} /> */}
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <Link to="/my-profile">
//                 <DropdownMenuItem>Profile</DropdownMenuItem>
//               </Link>
//               <Link to="/settings/general">
//                 <DropdownMenuItem>Settings</DropdownMenuItem>
//               </Link>
//               {/* <Link to="/settings/support">
//               <DropdownMenuItem>Support</DropdownMenuItem>
//               </Link> */}
//               <DropdownMenuSeparator />
//               <Link to="/auth/login">
//                 <DropdownMenuItem>Logout</DropdownMenuItem>
//               </Link>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </header>
//         {/* <main className='flex items-center justify-center gap-4 p-4 lg:gap-6 lg:p-6'> */}
//         <Outlet />
//         {/* </main> */}
//       </div>
//     </div>
//   )
// }

// export default DashboardLayout;

// -----------------------------------------

// import { Link, Outlet } from 'react-router-dom';
// import {
//   Home,
//   Package,
//   Package2,
//   Settings,
//   Users2,
// } from 'lucide-react';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from '@/components/ui/tooltip';
// import {
//   PanelLeft,
//   Search,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '@/context/UserContext';

// const DashboardLayout = () => {
//   const { user } = useUser();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('No token found');
//       }

//       const response = await fetch('http://localhost:5513/api/auth/logout', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(`Logout failed. Status: ${response.status}, Message: ${errorData.message}`);
//       }

//       localStorage.removeItem('token');
//       navigate('/auth/login');
//     } catch (error) {
//       console.error('Logout Error:', error);
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       <div className="flex flex-col items-center bg-gray-900 text-white w-16 py-4">
//         <div className="h-16 flex items-center justify-center">
//           <PanelLeft className="h-8 w-8" />
//         </div>
//         <nav className="mt-8 flex flex-col space-y-4">
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link to="/">
//                 <Button variant="ghost" size="icon" className="text-white">
//                   <Home className="h-6 w-6" />
//                 </Button>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent>Home</TooltipContent>
//           </Tooltip>

//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link to="/orders">
//                 <Button variant="ghost" size="icon" className="text-white">
//                   <Package className="h-6 w-6" />
//                 </Button>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent>Orders</TooltipContent>
//           </Tooltip>

//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link to="/my-products">
//                 <Button variant="ghost" size="icon" className="text-white">
//                   <Package2 className="h-6 w-6" />
//                 </Button>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent>My Products</TooltipContent>
//           </Tooltip>

//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link to="/settings">
//                 <Button variant="ghost" size="icon" className="text-white">
//                   <Settings className="h-6 w-6" />
//                 </Button>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent>Settings</TooltipContent>
//           </Tooltip>
//         </nav>
//         <div className="flex-1"></div>
//         <div className="mb-4">
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link to="/profile">
//                 <Button variant="ghost" size="icon" className="text-white">
//                   <Users2 className="h-6 w-6" />
//                 </Button>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent>Profile</TooltipContent>
//           </Tooltip>
//         </div>
//         <div>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-white"
//                 onClick={handleLogout}
//               >
//                 <Users2 className="h-6 w-6" />
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent>Logout</TooltipContent>
//           </Tooltip>
//         </div>
//       </div>
//       <div className="flex-1 p-4">
//         <div className="flex items-center justify-between mb-8">
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <div className="flex items-center space-x-4">
//             <Search className="h-6 w-6 text-gray-400" />
//             <DropdownMenu>
//               <DropdownMenuTrigger>
//                 <Button variant="ghost" size="icon" className="text-gray-400">
//                   <Users2 className="h-6 w-6" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 <DropdownMenuLabel>
//                   {user ? user.email : 'Loading...'}
//                 </DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <Link to="/profile">Profile</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link to="/settings">Settings</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem onClick={handleLogout}>
//                   Logout
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// -----------------------------------------

import { Link, Outlet } from 'react-router-dom';
import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  Users2,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { PanelLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Avvvatars from 'avvvatars-react';
import useFetchUser from '@/hooks/useFetchUser';

const DashboardLayout = () => {
  const user = useFetchUser();

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={'/'}
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              >
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">JAI JAGADAMBA STORE</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={'/'}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={'/products'}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">Products</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Products</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={'/customers'}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={'/sales'}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Analytics</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={'/settings'}
                className="flex h-9 w-9                 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  to="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">JAI JAGADAMBA STORE</span>
                </Link>
                <Link
                  to={'/'}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to={'/products'}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  to={'/sales'}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
                <Link
                  to={'/customers'}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  to={'/settings'}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Avvvatars value={user.email} style="shape" size={36} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to="/my-profile">
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
              <Link to="/settings/general">
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link to="/auth/login">
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

