/**
 * Design reminder — مسار مادة وبناء: بيانات مصدرية لمحتوى Fahmi Ali، تُعرض ضمن إيقاع تحريري عربي داكن/عاجي دون اختلاق عناصر أو تغيير النصوص الأصلية.
 */
export const assetRoot = "https://aseel.66ghz.com/civil/public/uploads";

export const contact = {
  name: "Fahmi Ali",
  title: "Architect",
  location: "Taiz city",
  phone: "773691222",
  email: "fhmy773691222@gmail.com",
  profileImage: `${assetRoot}/profile_pictures/6906a814215b5_IMG-20250916-WA0001.jpg`,
  aboutImage: "https://raw.githubusercontent.com/DiyarEngineeringConsulting/ArchFahmi/main/assets/fahmi-profile/fahmi-ali-engineer-profile.jpg",
  cv: `${assetRoot}/cvs/6906a81422968_السيرة%20الذاتية.pdf`,
  social: {
    facebook: "https://www.facebook.com/share/1Y1bWhLrkC/",
    linkedin: "https://www.linkedin.com/in/fahmi-alganadi-36652237a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/arch.fahmi.ali011?igsh=MTU0ZnVjdndwY253eg==",
    whatsapp: "https://wa.me/967773691222",
  },
};

export const bio = "مهندس معماري لتقديم الخدمات الهندسية المعتمدة لجميع متطلبات البناء والإنشاء المعماري بكل التفاصيل الملحقة مكتملة المخططات التنفيذية إلى الرفع والمحاكاة الواقعية لنمذجة فيديو يوافق واقع المبنى بنسب متوافقة ومعيارية.";

export type Project = {
  id: string;
  title: string;
  client: string;
  description: string;
  start: string;
  end: string;
  duration: string;
  updated: string;
  image: string;
  media: string[];
};

export const projects: Project[] = [
  {
    id: "27", title: "مبنى مسجد الإسكان الديني — سقطرى، قلنسية", client: "داعم متبرع", description: "تصميم معماري لمسجد الإسكان الديني في قلنسية، سقطرى.", start: "2026/01/01", end: "2026/01/12", duration: "0 سنوات 0 أشهر 11 أيام", updated: "2026/01/12",
    image: "https://raw.githubusercontent.com/DiyarEngineeringConsulting/ArchFahmi/main/assets/masjid-alsokan/masjid-exterior-hero.jpg", media: ["https://raw.githubusercontent.com/DiyarEngineeringConsulting/ArchFahmi/main/assets/masjid-alsokan/masjid-interior-wide.jpg", "https://raw.githubusercontent.com/DiyarEngineeringConsulting/ArchFahmi/main/assets/masjid-alsokan/masjid-interior-sunset.jpg", "https://raw.githubusercontent.com/DiyarEngineeringConsulting/ArchFahmi/main/assets/masjid-alsokan/masjid-interior-prayer.jpg", "https://raw.githubusercontent.com/DiyarEngineeringConsulting/ArchFahmi/main/assets/masjid-alsokan/masjid-exterior-logo.jpg", "https://raw.githubusercontent.com/DiyarEngineeringConsulting/ArchFahmi/main/assets/masjid-alsokan/masjid-exterior-documentation.jpg"],
  },
  {
    id: "26", title: "مبنى سكني استثماري", client: "محمد البريهي", description: "مبنى سكني استثماري طابقي", start: "2026/01/11", end: "2026/03/18", duration: "0 سنوات 2 أشهر 7 أيام", updated: "2026/07/22 11:17",
    image: `${assetRoot}/projects/6a610948bfbbe_1000093783.jpg`, media: [`${assetRoot}/projects/6a610948c0af7_1000093249.jpg`],
  },
  {
    id: "25", title: "مبنى سكني حديث", client: "اصيل الجهلاني", description: "مبنى عالمي", start: "2026/04/07", end: "2026/04/15", duration: "0 سنوات 0 أشهر 8 أيام", updated: "2026/04/29 19:18",
    image: `${assetRoot}/projects/69f2bbd9b0fce_IMG-20260425-WA0035.jpg`, media: [`${assetRoot}/projects/69f2bbd9b1b81_٢٠٢٦٠٤٣٠_٠٥٠٣٠١.png`],
  },
  {
    id: "7", title: "مبنى سكني شعبي مختلط", client: "د.حلمي البريهي", description: "مبنى سكني شعبي التنفيذ مختلط النظام الهيكلي.", start: "2025/09/09", end: "2025/10/24", duration: "0 سنوات 1 أشهر 15 أيام", updated: "2025/11/01 17:37",
    image: `${assetRoot}/projects/6906a7b68a6ee_Screenshot_20250914_142311_OneDrive.jpg`, media: [],
  },
  {
    id: "6", title: "مبنى سكني استثماري", client: "مصطفى محمد علي", description: "مبنى سكني استثماري مكون من جزء استثماري وشقق سكنية علوية", start: "2025/10/09", end: "2025/10/24", duration: "0 سنوات 0 أشهر 15 أيام", updated: "2025/11/01 17:27",
    image: `${assetRoot}/projects/6906a56e89c7e_new%20%20top%20%20VIEW%20House.jpg`, media: [`${assetRoot}/projects/6906a56e8bcd3_new%20VIEW%20House.jpg`, `${assetRoot}/projects/6906a56eb5fb3_new%20back%20VIEW%20House.jpg`, `${assetRoot}/projects/6906a56ed4cc9_BEST%20view%20r.HOUSE_Photo%20-%206.jpg`],
  },
  {
    id: "4", title: "مبنى سكني طابقي", client: "Abdualalem Alhamadi", description: "مبنى سكني يتكون من دور تهيئة وجزء تجاري ثمالادوار المتكررة المتمثلة بشقق سكنية بشقتين لكل دور بعدد 5ادوار متكررة.", start: "2025/06/18", end: "2025/06/03", duration: "0 سنوات 0 أشهر 15 أيام", updated: "2025/08/16 13:53",
    image: `${assetRoot}/projects/68a0efae859da_1750516891554.jpg`, media: [`${assetRoot}/projects/68a0efaf82f90_Screenshot_٢٠٢٥٠٧٣١_١٧٠٥٢١.jpg`, `${assetRoot}/projects/68a0efaf85147_IMG_٢٠٢٥٠٦٢١_١٧٥٦٣٣.png`, `${assetRoot}/projects/68a0efafbea68_Enscape_2025-06-03-15-58-08.jpg`, `${assetRoot}/projects/68a0efafdbf05_Enscape_2025-06-03-15-24-30.jpg`, `${assetRoot}/projects/68a0efaff139d_IMG_٢٠٢٥٠٦٠٥_١٨٠٩٢٢.jpg`],
  },
];

export const services = [
  { number: "01", title: "رفع ونمذجة واقعية للمباني السكنية", description: "رفع وتصميم 3D بما يحاكي الواقع الافتراضي ويبين التفاصيل المستقبلية للمبنى.", price: "600$-900$", tag: "VISUALIZATION" },
  { number: "02", title: "تقديم الرسومات التنفيذية لمختلف المباني", description: "تقديمالرسومات التنفيذية لمختلف المباني الخدمية والحكومية والسكينة وتوضيح التفاصيل الإنشائية ومعايير البناء وعناصر التحكم والخدمة الملحقة بالمباني.", price: "700$", tag: "DRAWINGS" },
];

export const blog = {
  id: "5", title: "تصميم منزل سكني في الحوبان", date: "مايو 2025", views: "89 مشاهدة", readTime: "دقيقة واحدة للقراءة", tag: "#تصميم_ورفع_يحاكي_الواقع_الافتراضي_للمبنى",
  image: `${assetRoot}/blog_thumbnails/6906a5cd071f1_Enscape_2025-06-04-03-35-53.jpg`,
  excerpt: "من آخر الأعمال التي أنجزتها خلال الأيام الماضية، بالتعاون مع مؤسسة الأهدل لعدة خدمات إنشائية وهندسية.",
  body: [
    "من آخر الأعمال التي أنجزتها خلال الأيام الماضية.", "تم العمل بالتعاون مع مؤسسة الأهدل لعدة خدمات إنشائية وهندسية.", "الموقع: مدينة تعز — منطقة الحوبان.", "التاريخ: مايو 2025.", "المالك: عبدالعليم علي.", "نوع المشروع: تصميم منزل سكني.", "الدور الأرضي: 3 محلات مع موقف سيارات وشقة خاصة.", "الدور الأول: شقة خاصة بالمالك.", "الدور الثاني: شقتان للإيجار.", "إعداد المخططات التنفيذية باستخدام AutoCAD.", "إعداد نموذج ثلاثي الأبعاد باستخدام SketchUp.", "إخراج واقعي باستخدام Enscape 6.5.", "إخراج واقعي باستخدام Lumion 11.", "والحمد لله دائمًا وأبدًا.", "Arch.F11 .. .. .📐",
  ],
};
