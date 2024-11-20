import {
  BarChart3,
  Calendar,
  CreditCard,
  Home,
  PieChart,
  Plus,
  Wallet
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { createClient } from "@/lib/supabase/server";
import { ProfileMenu } from "./profile-menu";

export async function SidebarComponent() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    console.error(error);
    return null;
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Wallet className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Budget App</span>
                <span className="text-xs text-muted-foreground">
                  Personal Finance
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive>
              <a href="/dashboard">
                <Home className="size-4" />
                <span>Dashboard</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/monthly">
                <Calendar className="size-4" />
                <span>Monthly View</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/analysis">
                <BarChart3 className="size-4" />
                <span>Analysis</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/transactions">
                <CreditCard className="size-4" />
                <span>Transactions</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/budgets">
                <PieChart className="size-4" />
                <span>Budgets</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex w-full flex-col gap-2 p-2">
          <Button className="w-full justify-start gap-2">
            <Plus className="size-4" />
            Add Transaction
          </Button>
          <SidebarMenu>
            <SidebarMenuItem>
              <ProfileMenu user={user} />
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
