'use client'

import Link from "next/link";
import {useEffect} from "react";

export default function About() {
    useEffect(() => {
        async function fetchComponentLibrary() {
            /* @ts-ignore */
            return await import('@demo/component-library/dist/component-library.js')
        }
        fetchComponentLibrary();
    }, [])


    return (
    <div>
        <p>This is the about page.</p>
        <div>
            {/* @ts-ignore */}
            <my-button label="test" />

            <Link href="/">Go Back</Link>

        </div>
    </div>
  );
}

