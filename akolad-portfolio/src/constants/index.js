import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  bootstrap,
  git,
  figma,
  xd,
  ap,
  golzar,
  avapardaz,
  kafechi,
  shahrdari,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'درباره من',
  },
  {
    id: 'work',
    title: 'نمونه کارها',
  },
  {
    id: 'contact',
    title: 'ارتباط با من',
  },
];

const services = [
  {
    title: 'توسعه دهنده وب',
    icon: web,
  },
  {
    title: 'توسعه دهنده React Native',
    icon: mobile,
  },
  {
    title: 'توسعه دهنده بک اند',
    icon: backend,
  },
  {
    title: 'تولید کننده محتوا',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'xd',
    icon: xd,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'کارآموز توسعه فرانت اند',
    company_name: 'آسان پرداخت (آپ)',
    icon: ap,
    iconBg: '#383E56',
    date: 'شهریور 1401 - بهمن 1401',
    points: [
      'توسعه اپلیکیشن های تحت وب با استفاده از React.js و سایر فناوری های مرتبط.',
      'همکاری با تیم های مربوطه از جمله طراحان رابط کاربری، مدیران محصول و سایر توسعه دهندگان برای توسعه کد هایی با کیفیت بالا.',
      'طراحی ریسپانسیو و اطمینان از سازگاری مرورگرهای مختلف.',
      'شرکت در code review ها و ارائه پیشنهادات سازنده به دیگر توسعه دهندگان.',
    ],
  },
  {
    title: 'توسعه دهنده فلاتر',
    company_name: 'خدمات پرستاری گلزار',
    icon: golzar,
    iconBg: '#E6DEDD',
    date: 'اردیبهشت 1401 - مهر 1401',
    points: [
      'توسعه اپلیکیشن های تحت وب با استفاده از React.js و سایر فناوری های مرتبط.',
      'همکاری با تیم های مربوطه از جمله طراحان رابط کاربری، مدیران محصول و سایر توسعه دهندگان برای توسعه کد هایی با کیفیت بالا.',
      'طراحی ریسپانسیو و اطمینان از سازگاری مرورگرهای مختلف.',
      'شرکت در code review ها و ارائه پیشنهادات سازنده به دیگر توسعه دهندگان.',
    ],
  },
  {
    title: 'توسعه دهنده وب',
    company_name: 'آوا پرداز کیهان کریمان',
    icon: avapardaz,
    iconBg: '#383E56',
    date: 'اسفند 1401 - فروردین 1402',
    points: [
      'توسعه اپلیکیشن های تحت وب با استفاده از React.js و سایر فناوری های مرتبط.',
      'همکاری با تیم های مربوطه از جمله طراحان رابط کاربری، مدیران محصول و سایر توسعه دهندگان برای توسعه کد هایی با کیفیت بالا.',
      'طراحی ریسپانسیو و اطمینان از سازگاری مرورگرهای مختلف.',
      'شرکت در code review ها و ارائه پیشنهادات سازنده به دیگر توسعه دهندگان.',
    ],
  },
];

const testimonials = [
  {
    testimonial: 'مهدی در کنار سخت کوشی، ظرافت زیادی در درک استاندارد های زیبایی شناسی دارد که در طول فرآیند توسعه مرا به وجد می آورد',
    name: 'فرداد جعفری',
    designation: 'Senior Flutter Developer',
    company: 'خدمات پرستاری گلزار',
    image: '../assets/testimonials/1.jpg',
  },
  {
    testimonial: "بنده از آقای عسکرپور کمال تشکر را دارم که همواره کنار ما بودند و با صبر و حوصله بسیار، به بررسی مشکلات و بهبود فعایل سایت ما پرداختند و همیشه همکاری صمیمانه‌ای را با ما داشته‌اند.",
    name: 'عرفان رضایی',
    designation: 'مدیر کسب و کار',
    company: 'نو آوران فن اندیش',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: "بنده از کیفیت و سرعت کار آقای  عسکرپور بسیار راضی هستم و همیشه به بهترین شکل ممکن پروژه‌های ما را انجام داده‌اند. پروژه‌هایی که در شرکت‌های توسعه نرم افزار به انجام میرسید، معمولا از نظر ظاهری نقص های زیادی داشتند. آقای عسکرپور با کیفیت بسیار عالی، و زیبایی منحصر بفردی پروژه را تحویل دادند.",
    name: 'خانم نورالهی',
    designation: 'مدیر منابع انسانی',
    company: 'آوا پرداز کیهان کریمان',
    image: '../assets/testimonials/2.jpg',
  },
];

const projects = [
  {
    name: 'کافه چی',
    description:
      'اپلیکیشن کراس پلتفرم که به کاربران امکان جستجو، رزرو و سفارش قهوه از کافی شاپ را می دهد.',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'figma',
        color: 'pink-text-gradient',
      },
    ],
    image: kafechi,
    source_code_link: 'https://www.figma.com/proto/P7MAccLLQd7C7lR5xSKlFD/Kafe-Chi',
  },
  {
    name: 'پورتفولیو',
    description:
      'نمایش جزئیات نمونه کارهای من، انیمیشن های خلاقانه، طراحی 3بعدی',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'blue-text-gradient',
      },
    ],
    image: '',
    source_code_link: '#',
  },
  {
    name: 'شهرداری کرمان',
    description:
      'طراحی لندینگ پیج وبسایت شهرداری کرمان و پیاده سازی اولیه',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: shahrdari,
    source_code_link: 'https://github.com/iMahdi1383/Resume/raw/master/Shahrdari.pdf',
  },
];

export { services, technologies, experiences, testimonials, projects };
