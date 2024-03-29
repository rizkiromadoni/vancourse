"use client"

import { BarChart, Compass, Layout, List } from "lucide-react"
import SidebarItem from "./sidebar-item"
import { usePathname } from "next/navigation"

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Compass,
        label: "Explore",
        href: "/search"
    }
]

const teacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses"
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics"
    }
]

const SidebarRoutes = () => {
  const pathname = usePathname()

  const isTeacherPage = pathname?.startsWith("/teacher")

  const routes = isTeacherPage ? teacherRoutes : guestRoutes

  return (
    <div className="flex flex-col w-full">
        {routes.map((route) => (
            <SidebarItem
                key={route.href}
                {...route}
            />
        ))}
    </div>
  )
}

export default SidebarRoutes