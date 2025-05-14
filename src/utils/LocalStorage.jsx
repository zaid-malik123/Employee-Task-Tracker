const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Prepare sales report",
        description: "Collect data and prepare Q1 sales report",
        date: "2025-05-01",
        category: "report",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Discuss new project roadmap",
        date: "2025-05-03",
        category: "meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client call",
        description: "Call with ABC Corp to finalize the deal",
        date: "2025-05-05",
        category: "communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Rohit",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Code review",
        description: "Review the new feature pull request",
        date: "2025-05-02",
        category: "development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update documentation",
        description: "Document the new authentication flow",
        date: "2025-05-04",
        category: "documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Resolve the issue users face while logging in",
        date: "2025-05-01",
        category: "bugfix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Add unit tests for the payment module",
        date: "2025-05-06",
        category: "testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create UI mockups",
        description: "Design mockups for the new dashboard",
        date: "2025-05-02",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Organize files",
        description: "Clean up and organize design assets",
        date: "2025-05-01",
        category: "organization",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Research UI trends",
        description: "Explore latest UI trends for dashboard design",
        date: "2025-05-03",
        category: "research",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Suman",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Deploy project",
        description: "Deploy the latest version to production",
        date: "2025-05-05",
        category: "deployment",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Monitor logs",
        description: "Check server logs for any issues",
        date: "2025-05-06",
        category: "monitoring",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Write blog post",
        description: "Write a technical article for the company blog",
        date: "2025-05-02",
        category: "content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Review blog SEO",
        description: "Optimize older blog posts for SEO",
        date: "2025-05-03",
        category: "seo",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Brainstorm content ideas",
        description: "Come up with new blog and video content ideas",
        date: "2025-05-04",
        category: "content",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

  const admin = [
    {
      id: 6,
      email: "admin@example.com",
      password: "123"
    }
  ];

  
  export const setLocalStorage = ()=>{
   localStorage.setItem("employees",JSON.stringify(employees))
   localStorage.setItem("admin",JSON.stringify(admin))
  }
  export const getLocalStorage = ()=>{
   const employees = JSON.parse(localStorage.getItem("employees"));
   const admin = JSON.parse(localStorage.getItem("admin"));
   return {employees, admin}
  }