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

export function apidocsFile(filename = "index.html"): string {
    return `/docs/api/${filename}`;
}

export function docsArticle(id: string): string {
    return `/docs/${id}`;
}
