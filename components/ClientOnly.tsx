'use client';
import { useEffect, useState } from 'react';

export default function ClientOnly({ children }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return <>{children}</>;
}