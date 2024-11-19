import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectPage from './pages/ProjectPage';
import Navbar from './components/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            errorElement: <NotFoundPage />,
            children: [
                { path: '/', element: <HomePage /> },
                {
                    path: 'projects',
                    element: <ProjectsPage />,
                    children: [
                        {
                            path: ':id',
                            element: <ProjectPage />,
                        },
                    ],
                },
            ],
        },
    ],
    {
        future: {
            v7_startTransition: true,
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    } as any
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
