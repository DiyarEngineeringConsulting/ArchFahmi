# Fahmi Ali — Architecture Portfolio

واجهة عربية أولًا مبنية بـ React وVite، ومهيأة للنشر الساكن على Vercel. تعرض نسخة تصميمية محدثة لمحتوى موقع Fahmi Ali المعماري، مع مسارات داخلية للمشاريع والخدمات والمدونة والاتصال.

## النشر على Vercel

اربط المستودع بمشروع جديد في Vercel أو استورده من GitHub. يقرأ Vercel ملف `vercel.json` تلقائيًا ويستخدم الإعدادات التالية:

| الإعداد | القيمة |
|---|---|
| مدير الحزم | `pnpm` |
| أمر التثبيت | `pnpm install --frozen-lockfile` |
| أمر البناء | `pnpm run build:vercel` |
| مجلد النشر | `dist/public` |
| فرع الإنتاج | `main` |

يعيد ملف `vercel.json` كتابة جميع المسارات إلى `index.html`، لذلك تظل روابط React مثل `/projects/4` و`/blogs/5` قابلة للفتح مباشرة أو عند التحديث من دون خطأ 404.

## التحليلات الاختيارية

لا يحتاج الموقع إلى متغيرات بيئة ليعمل على Vercel. وإذا أردت تفعيل Umami، أضف المتغيرين `VITE_ANALYTICS_ENDPOINT` و`VITE_ANALYTICS_WEBSITE_ID` من صفحة **Settings → Environment Variables** داخل مشروع Vercel؛ لن يُحمّل البرنامج النصي للتحليلات عند غيابهما.
