export function Color() {
    const colors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink']
    return colors[Math.floor(Math.random() * colors.length)]
}