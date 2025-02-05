"use client";

import {useEffect, useCallback} from "react";

import "systemjs";

let microFrontendPromise: Promise<any> | null = null;
export type MicroFrontendModule = {
    mount: (containerId: string) => void,
    unmount: (containerId: string) => void,
};

export const loadMicroFrontend = async (containerId: string): Promise<MicroFrontendModule | undefined> => {
    if (!microFrontendPromise) {
        microFrontendPromise = System.import(containerId)
            .then((module) => {
                return {...module};
            })
            .catch((err) => {
                microFrontendPromise = null;
                throw err;
            });
    }

    return microFrontendPromise;
};


export type MicroFrontendProps = {
    containerId: string
}

export default function MicroFrontend({containerId}: MicroFrontendProps) {
    useEffect(() => {
        let microFe: MicroFrontendModule | undefined;
        const loader = async () => {
            microFe = await loadMicroFrontend(containerId);
            microFe && microFe.mount(containerId);
        };
        loader();

        return () => microFe && microFe.unmount(containerId);
    }, [containerId]);

    return <div id={containerId}/>;
}
