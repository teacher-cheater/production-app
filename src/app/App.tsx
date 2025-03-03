import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={() => setIsOpen(true)}>toggle</button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis consequuntur cupiditate earum error minima nihil sit voluptate. Accusamus ad at dignissimos distinctio dolorem illum necessitatibus quae quasi ullam voluptatem?
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
