import {createRoot, Root} from 'react-dom/client'

import App from "./App.tsx";

let rootInstance: Root | null = null;

export function mount(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }
  // initializeFirebase(token);
  rootInstance = createRoot(container);
  rootInstance.render(<App />);
}

export function unmount(containerId: string) {
  if (rootInstance) {
    rootInstance.unmount();
    rootInstance = null;
  } else {
    console.error(`Application not mounted to "${containerId}"`);
  }
}
