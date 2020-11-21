export function index(): string {
    return "/";
}

export function about(): string {
    return "/about";
}

export function sandbox(): string {
    return "/sandbox";
}

export function docs(): string {
    return "/docs";
}

export function apidocsFolder(): string {
    return "/docs/api";
}

export function apidocsFile(filename: string): string {
    return `${apidocsFolder()}/${filename}`;
}

export function apidocsIndex(): string {
    return apidocsFile("index.html");
}

export function docsArticle(id: string): string {
    return `/docs/${id}`;
}

export const LibTiro = {
    gettingStarted: () => docsArticle("libtiro/getting-started"),
    embeddersGuide: () => docsArticle("libtiro/embedders-guide")
} as const;
