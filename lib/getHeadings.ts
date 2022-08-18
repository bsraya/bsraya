export function GetHeadings(content: string): string[] {
    const regex = new RegExp(/^##\s+(.*)/gm)
    const titleMatches = content.toString().match(regex)

    // if there is one or more matches
    if (titleMatches !== null) {
        // remove "## " from the headings
        var titleWithoutHastags: string[] = titleMatches?.map((match: string) => match.replace(/^##\s+/, ''))
        return titleWithoutHastags?.map((heading: string) => heading.replace(/[^\w\s]/gi, ''))
    }
    return []
}