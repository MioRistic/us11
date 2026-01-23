// app/chucky-lozano/layout.js

export const metadata = {
  title: 'Hirving “Chucky” Lozano: San Diego FC and the 2026 World Cup Dilemma',
  description:
    'Hirving “Chucky” Lozano faces a career crossroads as Javier Aguirre sends a clear message: no consistent club minutes, no spot in Mexico’s 2026 World Cup squad.',
  openGraph: {
    title: 'Hirving “Chucky” Lozano: San Diego FC and the 2026 World Cup Dilemma',
    description:
      'With World Cup 2026 approaching, Hirving Lozano must secure regular minutes at San Diego FC or risk missing out on Mexico’s squad. Full story and analysis.',
    url: 'https://www.us11fc.com/lozano-and-the-world-cup',  
    siteName: 'US11',
    images: [
      {
        url: 'https://assets.goal.com/images/v3/getty-1245147268/crop/MM5DIMBQGQ5DEMRVGI5G433XMU5DKMRYHI4DE===/GettyImages-1245147268.jpg?auto=webp&format=pjpg&width=1920&quality=60',
        width: 1200,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hirving “Chucky” Lozano: San Diego FC and the 2026 World Cup Dilemma',
    description:
      'Lozano faces a critical moment in his career — consistent club minutes are now essential for Mexico 2026 selection. Read full story.',
    images: [
      'https://assets.goal.com/images/v3/getty-2210154915/crop/MM5DGMRQGA5DCOBQGA5G433XMU5DGNRYHIYTEMQ=/GettyImages-2210154915.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    ],
    creator: '@yourTwitterHandle', // zameni ako želiš
  },
};

export default function ChuckyLozanoLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
