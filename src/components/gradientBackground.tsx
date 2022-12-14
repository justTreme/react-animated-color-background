import MeshGradient from "mesh-gradient.js";
import React, { useEffect, useRef } from "react";
import { generateUUID } from "../utils/generate";

interface Props {
    className?: string;
    colors: string[];
    lowPerformance?: boolean
}

export const GradientBackground = (props: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const canvasId = `gradientCanvas${generateUUID()}`;

    useEffect(() => {
        let interval: NodeJS.Timer;

        if (ref.current) {
            const gradient = new MeshGradient();
            gradient.initGradient(`#${canvasId}`, props.colors);
            gradient.setCanvasSize(
                ref.current?.clientWidth,
                ref.current?.clientHeight
            );
            let i = Math.random() * 1000;

            interval = setInterval(() => {
                i += 0.004;
                gradient?.changePosition(i);
            });

            return () => clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [props.colors]);

    return (
        <div
            ref={ref}
            className={props.className}
            style={{ overflow: "hidden" }}
        >
            <canvas id={canvasId} style={{ filter: !props.lowPerformance ? "blur(5rem)" : undefined }} />
        </div>
    );
};
