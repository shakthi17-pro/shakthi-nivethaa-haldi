import type { Metadata } from 'next';
import SurpriseExperience from './surprise-experience';

export const metadata: Metadata = {
  title: 'A little something for Nivethaa',
  description: 'A story made with love, just for Nivethaa.',
};

export default function SurprisePage() {
  return <SurpriseExperience />;
}
