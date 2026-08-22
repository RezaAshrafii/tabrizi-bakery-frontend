export interface BusinessContent {
  meta: {
    siteName: string;
    siteUrl: string;
    demoNotice: string;
  };
  contact: {
    phoneFormatted: string;
    phoneRaw: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      full: string;
      mapsUrl: string;
      embedMapUrl: string;
    };
    social: {
      instagram: string;
      reviewsUrl: string;
    };
  };
  hours: {
    schedule: Array<{
      days: string;
      time: string;
      isClosed?: boolean;
    }>;
    note: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    headlineEnd: string;
    subcopy: string;
    primaryCta: {
      text: string;
      href: string;
    };
    secondaryCta: {
      text: string;
      href: string;
    };
    features: Array<{
      title: string;
      subtitle: string;
    }>;
  };
  categories: Array<{
    id: string;
    category: string;
    title: string;
    description: string;
    note: string;
    image: string;
    imageAlt: string;
  }>;
  customOrders: {
    title: string;
    subtitle: string;
    description: string;
    phoneCtaText: string;
    emailCtaText: string;
    disclaimer: string;
  };
  story: {
    badge: string;
    heading: string;
    paragraphs: string[];
    values: Array<{
      title: string;
      description: string;
    }>;
  };
  gallery: {
    badge: string;
    heading: string;
    description: string;
    items: Array<{
      src: string;
      alt: string;
      title: string;
      caption: string;
    }>;
  };
  trust: {
    heading: string;
    subcopy: string;
    reviewLinkText: string;
  };
}

export const siteContent: BusinessContent = {
  meta: {
    siteName: 'Tabrizi Bakery',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://tabrizi-bakery.vercel.app',
    demoNotice: 'Private proposal concept for Tabrizi Bakery. Pending owner review and authorization.',
  },
  contact: {
    phoneFormatted: '(617) 926-0880',
    phoneRaw: '+16179260880',
    email: 'tabrizibakery@gmail.com',
    address: {
      street: '56A Mount Auburn Street',
      city: 'Watertown',
      state: 'MA',
      zip: '02472',
      full: '56A Mount Auburn Street, Watertown, MA 02472',
      mapsUrl: 'https://maps.google.com/?q=56A+Mount+Auburn+St,+Watertown,+MA+02472',
      embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.4354228966453!2d-71.18683522339599!3d42.36522507119293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37813a36db8a1%3A0xc48c0dbb121fb6bd!2s56A%20Mt%20Auburn%20St%2C%20Watertown%2C%20MA%2002472!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
    },
    social: {
      instagram: 'https://www.instagram.com/tabrizibakery/',
      reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Tabrizi+Bakery+Watertown+MA',
    },
  },
  hours: {
    schedule: [
      { days: 'Tuesday – Friday', time: '10:00 AM – 7:00 PM' },
      { days: 'Saturday', time: '10:00 AM – 7:30 PM' },
      { days: 'Sunday', time: '11:00 AM – 6:00 PM' },
      { days: 'Monday', time: 'Closed', isClosed: true },
    ],
    note: 'Hours subject to holiday schedules and owner confirmation.',
  },
  hero: {
    badge: 'Watertown, Massachusetts',
    headline: 'Persian pastries, breads &',
    headlineHighlight: 'specialty goods',
    headlineEnd: 'in Watertown.',
    subcopy: 'A local Watertown bakery offering Persian sweets, baked goods, and specialty grocery items.',
    primaryCta: {
      text: 'Call the Bakery',
      href: 'tel:+16179260880',
    },
    secondaryCta: {
      text: 'Get Directions',
      href: 'https://maps.google.com/?q=56A+Mount+Auburn+St,+Watertown,+MA+02472',
    },
    features: [
      {
        title: 'Local Bakery',
        subtitle: 'Mount Auburn Street',
      },
      {
        title: 'Pastries & Breads',
        subtitle: 'Sweet and baked items',
      },
      {
        title: 'Specialty Grocery',
        subtitle: 'Pantry items & teas',
      },
    ],
  },
  categories: [
    {
      id: 'persian-pastries',
      category: 'Sweets',
      title: 'Persian Cookies & Pastries',
      description: 'A variety of Persian cookies and confections including tea cookies and flavored sweets.',
      note: 'Selection varies. Please call for current availability.',
      image: '/images/products/12-persian-cookie-selection.webp',
      imageAlt: 'Assorted Persian cookies and pastries',
    },
    {
      id: 'baklava',
      category: 'Pastries',
      title: 'Baklava',
      description: 'Layered filo pastry with nuts and sweet syrup.',
      note: 'Please call for current availability.',
      image: '/images/products/01-baklava-closeup.webp',
      imageAlt: 'Layered baklava cut into pieces',
    },
    {
      id: 'breads',
      category: 'Breads',
      title: 'Flatbreads',
      description: 'Persian-style flatbreads such as Barbari.',
      note: 'Please call for current bread availability.',
      image: '/images/products/05-barbari-bread.webp',
      imageAlt: 'Barbari flatbread with sesame seeds',
    },
    {
      id: 'custom-platters',
      category: 'Celebrations',
      title: 'Pastry Boxes & Platters',
      description: 'Assorted pastry boxes and arrangements for gatherings and celebrations.',
      note: 'Please inquire in advance by phone or email.',
      image: '/images/products/07-premium-pastry-platter.webp',
      imageAlt: 'Persian pastry platter arrangement',
    },
  ],
  customOrders: {
    title: 'Custom Orders & Celebrations',
    subtitle: 'Pastry Platters & Celebration Boxes',
    description: 'Planning a gathering, celebration, or special event? Tabrizi Bakery prepares assorted pastry boxes and platters. Please reach out by phone or email to discuss details and timing.',
    phoneCtaText: 'Call (617) 926-0880',
    emailCtaText: 'Email tabrizibakery@gmail.com',
    disclaimer: 'Please note: Online ordering and online payment are not supported on this website. All orders and confirmations are coordinated directly with bakery staff by phone, email, or in person.',
  },
  story: {
    badge: 'About Tabrizi Bakery',
    heading: 'Tabrizi Bakery in Watertown',
    paragraphs: [
      'Tabrizi Bakery is located on Mount Auburn Street in Watertown, offering Persian pastries, baked goods, and specialty grocery items.',
      'From sweet treats and flatbreads to pantry items and teas, the bakery serves neighbors and visitors across Greater Boston.',
    ],
    values: [
      {
        title: 'Persian Sweets',
        description: 'Cookies, baklava, and specialty confections.',
      },
      {
        title: 'Watertown Location',
        description: 'Conveniently located on Mount Auburn Street.',
      },
      {
        title: 'Direct Service',
        description: 'Friendly in-person and phone assistance.',
      },
    ],
  },
  gallery: {
    badge: 'Inside The Bakery',
    heading: 'Storefront & Display',
    description: 'A view of the counter, display cases, and specialty shelves at 56A Mount Auburn Street.',
    items: [
      {
        src: '/images/interior/02-bakery-display-front.webp',
        alt: 'Front view of bakery display counter with sweet assortments',
        title: 'Pastry Display Counter',
        caption: 'Sweet assortments and baked items on display.',
      },
      {
        src: '/images/gallery/13-bakery-display-case.webp',
        alt: 'Glass counter case displaying Persian sweets and confections',
        title: 'Sweets & Confections',
        caption: 'Pastries and confections arranged in counter cases.',
      },
      {
        src: '/images/gallery/16-bakery-shelf-products.webp',
        alt: 'Storefront shelving with specialty grocery items',
        title: 'Specialty Grocery & Pantry',
        caption: 'Selected teas, dry goods, and specialty items.',
      },
      {
        src: '/images/gallery/17-dessert-display-counter.webp',
        alt: 'Display cases with chilled desserts and party sweets',
        title: 'Cakes & Celebration Items',
        caption: 'Specialty items and sweets for gatherings.',
      },
    ],
  },
  trust: {
    heading: 'Community Reviews',
    subcopy: 'Serving Watertown and the surrounding Boston area.',
    reviewLinkText: 'Read customer reviews on Google Maps',
  },
};
