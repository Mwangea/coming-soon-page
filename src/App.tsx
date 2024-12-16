import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { NewsletterForm } from './components/NewsletterForm';
import { Contact } from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <FeatureGrid />
      <NewsletterForm />
      <Contact />
    </Layout>
  );
}

export default App;