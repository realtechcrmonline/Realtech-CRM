'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Bot, Settings, Search, UploadCloud, BookUser, FileText, Mic, Calendar, Mail } from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { Logo } from '@/components/icons';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/contacts', label: 'Contacts', icon: BookUser },
    { href: '/appointments', label: 'Appointments', icon: Calendar },
    { href: '/transcriptions', label: 'Call Scripts', icon: FileText },
    { href: '/templates', label: 'Email Templates', icon: Mail },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <Logo className="h-7 w-7 text-primary" />
              <span className="font-headline text-lg font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
                Howdy Analytics
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <Link href={item.href}>
                    <SidebarMenuButton
                      isActive={pathname.startsWith(item.href)}
                      tooltip={{ children: item.label }}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
              <div className="flex items-center gap-3 p-2 rounded-md">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://picsum.photos/seed/user-avatar/40/40" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="overflow-hidden group-data-[collapsible=icon]:hidden">
                  <p className="text-sm font-medium text-sidebar-foreground truncate">Jane Doe</p>
                </div>
              </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <SidebarTrigger className="sm:hidden" />
            
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-secondary pl-8 md:w-[200px] lg:w-[320px]"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="https://picsum.photos/seed/user-avatar/40/40" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="flex-1 p-4 sm:px-6 sm:py-0 space-y-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
