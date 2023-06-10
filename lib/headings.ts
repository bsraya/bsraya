export default function getHeadings(content: string): string[] {
    const regex = /^##\s+(.*)/gm;
    let match;
    const headings = [];

    while ((match = regex.exec(content)) !== null) {
        // Remove non-alphanumeric characters from the heading
        const heading = match[1].replace(/[^\w\s]/gi, '');
        headings.push(heading);
    }

    return headings;
}