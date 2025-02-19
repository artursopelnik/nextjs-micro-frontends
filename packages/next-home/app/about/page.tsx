import Link from "next/link";

import { MyComponent } from '@demo/stencil-react-component-library/src/app/components'

export default function About() {
    return (
    <div suppressHydrationWarning>
        <p>This is the about page.</p>
        <div>
            <MyComponent first="artur" last="sopelnik" />
        </div>
        <div>
            <Link href="/">Go Back</Link>
        </div>
    </div>
  );
}

