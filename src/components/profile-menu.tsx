"use client";
import { signOutAction } from "@/app/auth-actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { User as SupabaseUser } from "@supabase/supabase-js";
import {
  LogOut
} from "lucide-react";
import { SidebarMenuButton } from "./ui/sidebar";

export function ProfileMenu({ user }: { user: SupabaseUser }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton size="lg" className="w-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={user?.user_metadata?.avatar_url}
              alt={user?.user_metadata?.full_name}
            />
            <AvatarFallback>
              {user?.user_metadata?.full_name.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">
              {user?.user_metadata?.full_name}
            </span>
            <span className="text-xs text-muted-foreground">{user?.email}</span>
          </div>
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="start" className="w-56">
        {/* <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem onClick={() => signOutAction()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
