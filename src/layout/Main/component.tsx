import React from 'react'
import Clock from '../../component/Clock'
import Header from '../../component/Header'

interface Props {
    
}

const MainLayout = ( {}: Props) => {
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
                <div className="test_content">
                    <TestLayout />
                    <Clock />
                </div>
            </section>
            <aside className="app-page_results-drawer" />
        </main>
    )
}

export default MainLayout
