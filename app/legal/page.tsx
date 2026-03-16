import { Suspense } from 'react';
import { Footer } from '@/app/components';
import LegalPages from '@/app/components/legal/Legal';

export default function LegalPage() {
  return (
    <main>
      <Suspense>
        <LegalPages />
      </Suspense>
      <Footer />
    </main>
  );
}
