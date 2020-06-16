export function greet(name: string): string {
    return `Hello, ${name} on ${new Date().toTimeString()}`;
}
