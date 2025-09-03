import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education - Harshal Bansal',
	description: 'Harshal Bansal\'s educational background including B.Tech in Computer Science and Artificial Intelligence from PEC Chandigarh.',
};

export default function EducationPage() {
	return <Education />;
}