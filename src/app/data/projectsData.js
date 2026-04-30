export const projectsData = [
  {
    id: 'explore-nest',
    title: 'Explore Nest',
    description:
      'Tourist guide platform with role-based dashboards, JWT authentication, and user-personalised offers on tour package bookings.',
    image: '/images/projects/explore-nest.jpg',
    tag: ['All', 'Full Stack'],
    techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'JWT'],
    githubUrl: 'https://github.com/Rezwan66/explore-nest-client',
    githubServerUrl: 'https://github.com/Rezwan66/explore-nest-server',
    liveUrl: 'https://explore-nest.web.app/',
    challenges:
      'Implementing secure role-based access control with three distinct user roles (admin, guide, tourist) while maintaining a seamless user experience. Managing complex state across dashboards and ensuring JWT tokens were properly handled for protected routes.',
    improvements:
      'Add real-time chat between tourists and guides, integrate payment gateway for tour bookings, implement map-based destination search with Google Maps API, and add review/rating system for guides.',
  },
  {
    id: 'travel-buddy',
    title: 'Travel Buddy io',
    description:
      'Carpool and ride-sharing website with user-based actions, service management dashboard, and a visually appealing dark mode.',
    image: '/images/projects/travel-buddy.jpg',
    tag: ['All', 'Full Stack'],
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Firebase', 'JWT'],
    githubUrl: 'https://github.com/Rezwan66/travel-buddy-io-client',
    githubServerUrl: 'https://github.com/Rezwan66/travel-buddy-io-server',
    liveUrl: 'https://travel-buddy-io.web.app/',
    challenges:
      'Building a responsive ride-sharing system that supports both ride providers and seekers, with real-time updates on availability. Implementing efficient data retrieval and optimizing API calls for a smooth user experience.',
    improvements:
      'Add real-time ride tracking with WebSocket, implement route optimization algorithms, integrate payment processing, and add push notifications for ride confirmations.',
  },
  {
    id: 'auto-maniac',
    title: 'Auto Maniac',
    description:
      'Car marketplace with brand-based product filtering, shopping cart, and full CRUD operations for product management.',
    image: '/images/projects/auto-maniac.jpg',
    tag: ['All', 'Full Stack'],
    techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Firebase'],
    githubUrl: 'https://github.com/Rezwan66/auto-maniac-client',
    githubServerUrl: 'https://github.com/Rezwan66/auto-maniac-server',
    liveUrl: 'https://auto-maniac.web.app/',
    challenges:
      'Creating an intuitive brand-based filtering system with dynamic UI updates, and managing complex cart state with multiple product variants. Ensuring data consistency between frontend cart and backend inventory.',
    improvements:
      'Add advanced search with autocomplete, implement comparison feature between car models, add wishlist functionality, and integrate Stripe for secure checkout.',
  },
  {
    id: 'task-master',
    title: 'Task Master',
    description:
      'Intelligent task management platform allowing users to sign up, sign in, and manage their tasks efficiently with drag-and-drop.',
    image: '/images/projects/task-master.jpg',
    tag: ['All', 'Full Stack'],
    techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/Rezwan66',
    liveUrl: '/',
    challenges:
      'Implementing a smooth drag-and-drop interface for task reordering while maintaining state consistency with the backend. Managing optimistic UI updates with proper error handling.',
    improvements:
      'Add team collaboration features, implement task templates, add calendar view integration, and build notification system for deadlines.',
  },
  {
    id: 'entertainment-freak',
    title: 'Entertainment Freak',
    description:
      'Responsive event management SPA to explore and book entertainment events and concert tickets with dynamic categories.',
    image: '/images/projects/entertainment-freak.jpg',
    tag: ['All', 'Frontend'],
    techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Firebase'],
    githubUrl: 'https://github.com/Rezwan66/entertainment-freak',
    liveUrl: 'https://entertainment-freak.web.app/',
    challenges:
      'Building a responsive event discovery interface with dynamic category filtering and ensuring smooth navigation across different event types while maintaining performance.',
    improvements:
      'Add event recommendations based on user preferences, implement seat selection for concerts, integrate social sharing features, and add event reminders.',
  },
  {
    id: 'bistro-boss',
    title: 'Bistro Boss',
    description:
      'Online food ordering platform allowing customers to browse menus, place orders, and manage their food preferences.',
    image: '/images/projects/bistro-boss.jpg',
    tag: ['All', 'Full Stack'],
    techStack: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/Rezwan66',
    liveUrl: '/',
    challenges:
      'Integrating Stripe payment processing securely while managing order state, implementing real-time order status updates, and building an admin dashboard for order management.',
    improvements:
      'Add real-time order tracking, implement delivery partner integration, add menu recommendations using collaborative filtering, and build a loyalty rewards system.',
  },
  {
    id: 'stay-vista',
    title: 'Stay Vista',
    description:
      'User-friendly hotel booking platform to browse, filter, book, and manage accommodation with calendar-based availability.',
    image: '/images/projects/stay-vista.jpg',
    tag: ['All', 'Full Stack'],
    techStack: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/Rezwan66',
    liveUrl: '/',
    challenges:
      'Building a date-range based availability system with conflict resolution for bookings, and implementing a smooth checkout flow with Stripe integration.',
    improvements:
      'Add map-based hotel search, implement price comparison features, add review aggregation, and integrate with external booking APIs for wider availability.',
  },
];
