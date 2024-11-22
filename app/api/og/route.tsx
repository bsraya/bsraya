import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// How to call this?
// http://localhost:3000/api/og?title=Image+Compression+with+SVD&date=January+01,+2023

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title');
    const date = searchParams.get('date');

    return new ImageResponse(
        (   
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    backgroundImage: `linear-gradient(
                        180deg,
                        rgb(59, 59, 59) 0%,
                        rgb(92, 92, 92) 26%,
                        rgb(125, 125, 125) 39%,
                        rgb(156, 156, 156) 50%,
                        rgb(189, 189, 189) 61%,
                        rgb(222, 222, 222) 74%,
                        rgba(255, 255, 255) 100%
                    )`,
                }}
            >
                <div
                    style={{
                        height: '90%',
                        width: '90%',
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'white',
                        color: 'black',
                        padding: '0 40px 0 40px',
                        border: '2px solid black',
                        borderRadius: '20px',
                        boxSizing: 'border-box',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        boxShadow: '10px 10px 0px 0px rgb(0,0,0)'
                    }}
                >
                    <p
                        style={{
                            fontSize: '80px',
                            margin: '50px 0 auto 0',
                            fontWeight: 'bold',
                        }}
                    >
                        {title}
                    </p>
                    <div style={{ display: 'flex', margin: '0 0 15px 0' }}>
                        <p
                            style={{
                                fontSize: '20px',
                                color: 'black'
                            }}
                        >
                            Bijon Setyawan Raya &#183; {date}
                        </p>
                        <div style={{ marginLeft: 'auto', fontSize: '40px' }}>⌨️</div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}