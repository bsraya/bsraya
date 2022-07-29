import Avatar, { genConfig } from 'react-nice-avatar'

export default function MyAvatar({size}: {size: string}) {
    const config = {
        "sex": "man",
        "faceColor": "#F9C9B6",
        "earSize": "small",
        "eyeStyle": "oval",
        "noseStyle": "long",
        "mouthStyle": "laugh",
        "shirtStyle": "hoody",
        "glassesStyle": "none",
        "hairColor": "#000",
        "hairStyle": "thick",
        "hatStyle": "none",
        "hatColor": "#000",
        "eyeBrowStyle": "up",
        "shirtColor": "#F4D150",
        "bgColor": "#FFEDEF"
    }

    // @ts-ignore
    const myConfig = genConfig(config)

    return (
        <Avatar style={{ width: size, height: size }} {...myConfig} />
    )
}
