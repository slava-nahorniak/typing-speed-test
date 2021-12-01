import React from 'react';
import './App.css';
import Header from './component/Header';
import TestLayout from './layout/Test';
import Clock from './component/Clock';

function App() {
    return (
        <main
            className="app-page"
        >
            <section className="app-page_test">
                <Header
                    level={ 1 }
                    className="test_header"
                    text="Test your typing speed with starting typing..."
                />
                <TestLayout />
            </section>
            <aside className="app-page_results-drawer" />
        </main>
    );
}

export default App;
