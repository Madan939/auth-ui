import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, Bot, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"

const stats = [
  {
    title: "Total Conversations",
    value: "1,248",
    change: "+12.5%",
    trend: "up",
    icon: MessageSquare,
    description: "vs last month",
  },
  {
    title: "Active Visitors",
    value: "342",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    description: "currently online",
  },
  {
    title: "AI Responses",
    value: "856",
    change: "+23.1%",
    trend: "up",
    icon: Bot,
    description: "automated this month",
  },
  {
    title: "Response Rate",
    value: "94.2%",
    change: "-2.4%",
    trend: "down",
    icon: TrendingUp,
    description: "avg response time 1.2m",
  },
]

const recentConversations = [
  {
    id: 1,
    visitor: "Sarah Johnson",
    email: "sarah.j@email.com",
    message: "Hi, I need help with my subscription...",
    time: "2 min ago",
    status: "active",
  },
  {
    id: 2,
    visitor: "Mike Chen",
    email: "mike.chen@company.com",
    message: "Can you tell me about pricing plans?",
    time: "5 min ago",
    status: "ai",
  },
  {
    id: 3,
    visitor: "Emily Davis",
    email: "emily.d@startup.io",
    message: "Thanks for the quick response!",
    time: "12 min ago",
    status: "resolved",
  },
  {
    id: 4,
    visitor: "Alex Thompson",
    email: "alex.t@business.net",
    message: "How do I integrate with Slack?",
    time: "18 min ago",
    status: "ai",
  },
  {
    id: 5,
    visitor: "Lisa Wang",
    email: "lisa.w@tech.co",
    message: "Need to upgrade my plan",
    time: "25 min ago",
    status: "waiting",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s what&apos;s happening with your conversations.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs">
                {stat.trend === "up" ? (
                  <span className="flex items-center text-green-600">
                    <ArrowUpRight className="h-3 w-3" />
                    {stat.change}
                  </span>
                ) : (
                  <span className="flex items-center text-red-500">
                    <ArrowDownRight className="h-3 w-3" />
                    {stat.change}
                  </span>
                )}
                <span className="text-muted-foreground">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Conversations */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Recent Conversations</CardTitle>
          <CardDescription>Your latest customer interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentConversations.map((conversation) => (
              <div
                key={conversation.id}
                className="flex items-center justify-between rounded-lg border border-border/50 p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    {conversation.visitor.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{conversation.visitor}</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[300px]">
                      {conversation.message}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      conversation.status === "active"
                        ? "bg-green-100 text-green-700"
                        : conversation.status === "ai"
                        ? "bg-purple-100 text-purple-700"
                        : conversation.status === "resolved"
                        ? "bg-gray-100 text-gray-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {conversation.status === "ai" ? "AI" : conversation.status}
                  </span>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {conversation.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
