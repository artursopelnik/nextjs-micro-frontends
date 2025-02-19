import Link from "next/link";

import { MyComponent } from '@demo/stencil-react-component-library/src/app/components'

export default function About() {
    return (
    <div>
        <p>This is the about page.</p>
        <div>
            <MyComponent first="max" last="musterman" />
        </div>
        <div>
            <Link href="/">Go Back</Link>
        </div>
    </div>
  );
}

