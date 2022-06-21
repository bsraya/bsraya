export function Color(): string {
    const colors: string[] = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink']
    return colors[Math.floor(Math.random() * colors.length)]
}