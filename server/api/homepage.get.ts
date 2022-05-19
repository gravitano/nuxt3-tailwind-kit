export default defineEventHandler(() => {
  return {
    hero: {
      title: 'Nuxt 3 Tailwind Kit',
      description: 'Nuxt 3 Starter Kit + Tailwind CSS',
      image:
        'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80',
      button: {
        text: 'Get Started',
        action: '#feature',
      },
    },
    about: {
      title: 'About',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nesciunt assumenda exercitationem tenetur, sint, perspiciatis dolorem, esse eligendi ad sit id doloremque cum officiis accusamus. Nam ipsum vero fugit esse.',
      button: {
        text: 'Learn More',
        action: '#feature',
      },
    },
    feature: {
      title: 'Features',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    features: [
      {
        name: 'Feature 1',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        image:
          'https://images.unsplash.com/photo-1446941303752-a64bb1048d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        imagePosition: 'right',
        imageAlt: '',
        theme: '', // default
        items: [
          {
            title: 'Feature 1.1',
            description: 'Description 1.1',
          },
          {
            title: 'Feature 1.1',
            description: 'Description 1.1',
          },
          {
            title: 'Feature 1.1',
            description: 'Description 1.1',
          },
        ],
      },
      {
        name: 'Feature 2',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        image:
          'https://images.unsplash.com/photo-1614315517650-3771cf72d18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
        imagePosition: 'left',
        imageAlt: '',
        theme: '', // default
        items: [
          {
            title: 'Feature 2.1',
            description: 'Description 2.1',
          },
          {
            title: 'Feature 2.1',
            description: 'Description 2.1',
          },
          {
            title: 'Feature 2.1',
            description: 'Description 2.1',
          },
        ],
      },
      {
        name: 'Feature 3',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        image:
          'https://images.unsplash.com/photo-1614315517650-3771cf72d18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
        imagePosition: 'right',
        imageAlt: '',
        theme: 'feature-blue',
        items: [
          {
            title: 'Feature 3.1',
            description: 'Description 3.1',
          },
          {
            title: 'Feature 3.1',
            description: 'Description 3.1',
          },
          {
            title: 'Feature 3.1',
            description: 'Description 3.1',
          },
        ],
      },
    ],
    quote: {
      title: 'Quote Title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim quis incidunt fugiat, quisquam aspernatur eaque necessitatibus sit ipsum voluptas excepturi rerum in mollitia, iusto, id velit optio commodi odio',
    },
    contact: {
      title: 'Title',
      description:
        'Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.',
      email: 'app@example.com',
      phone: '+62-0000-111-2222',
      website: 'domain.tld',
      form: {
        title: 'Contact Us',
        description: `Have question? Submit your question on this form bellow and we'll be in touch.`,
      },
    },
  };
});
