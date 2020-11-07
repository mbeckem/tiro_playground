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

export function apidocsFile(filename = "index.html"): string {
    return `${apidocsFolder()}/${filename}`;
}

export function docsArticle(id: string): string {
    return `/docs/${id}`;
}
