import React from 'react'
import Header from '../../component/Header'

const TestLayout = () => {
    return (
        <section className="app-page_test">
        <div className="app-page_content">
            <Clock />
        </div>
    </section>
        <section>
            <Header
                id="Just start typing to start the test."
            />
            <TestArea></TestArea>
        </section>
    )
}

export default TestLayout
