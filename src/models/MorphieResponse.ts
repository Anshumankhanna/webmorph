export type Colors = {
    primary_color: string;
    secondary_color: string;
    accent_color: string;
    background_color: string;
}

export type Output = {
    output: string;
}

export type MorphieResponse = {
    colors: Colors[];
    layout: string[];
} | Output;

export type Appearance = {
    colors: Colors;
    layout: string;
}