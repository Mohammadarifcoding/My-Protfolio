import React, { ReactNode } from 'react';

const Container = ({children}: {children: ReactNode}) => {
    return (
        <div className="container py-10 md:py-16">
            {children}
        </div>
    );
};

export default Container;