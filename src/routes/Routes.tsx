import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NotFound from '../pages/notFound/NotFound';
import Container from '../components/common/container/container';
import Layout from '../components/layout/Layout';

const HomePage = lazy(() => import('../pages/home/Home'));
const ProjectPage = lazy(() => import('../pages/projects/Projects'));
const AboutPage = lazy(() => import('../pages/about/About'));
const ContactsPage = lazy(() => import('../pages/contacts/Contacts'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="project" element={<ProjectPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Container>
    </Suspense>
  );
};

export default AppRoutes;
