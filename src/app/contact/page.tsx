import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Harshal Bansal',
	description: 'Get in touch with Harshal Bansal, a Software Developer specializing in Machine learning.',
};

export default function ContactPage() {
	return <Contact />;
}