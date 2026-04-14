"use client";

import { useState, useEffect } from "react";

export default function SafeYear() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    if (!year) return <span className="opacity-0">2026</span>;

    return <span>{year}</span>;
}
