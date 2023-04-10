import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from '../components/header/Header';
import NotFound from '../pages/notFound/NotFound';

const HomePage = lazy(() => import('../pages/home/Home'));
const ProjectPage = lazy(() => import('../pages/projects/Projects'));
const AboutPage = lazy(() => import('../pages/about/About'));
const ContactsPage = lazy(() => import('../pages/contacts/Contacts'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Routes>
        <Route path="home" element={<Header />} />
        <Route index element={<HomePage />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
