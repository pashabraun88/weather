import { Theme } from "../context/ThemeContext";

export function changeCssRootVariables (theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement;

        const componentsTheme = [
            'body-background',
            'components-background',
            'card-background',
            'card-shadow',
            'text-color',
            'background-shadow-cloud'
        ];

        componentsTheme.forEach(components => {
            root.style.setProperty(
                `--${components}-default`,
                `var(--${components}-${theme})`
            )
        });
}