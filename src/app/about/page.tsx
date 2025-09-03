import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Harshal Bansal - Software Developer',
	description: 'Learn about Harshal Bansal, an AI developer with expertise in Machine Learning, LLMOps and Data engineering technologies.',
};

export default function AboutPage() {
	return <About />;
}