import { ImageResponse } from '@/lib/image-response';

export const runtime = 'edge';

// How to call this?
// http://localhost:8000/api/og?title=Bijon+Setyawan+Raya&endpoint=about

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title');
    const endpoint = searchParams.get('endpoint');
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    justifyContent: 'center',
                    background: 'white',
                    color: 'black',
                    padding: '0 40px 0 40px'
                }}
            >
                <p
                    style={{
                        fontSize: '80px',
                        margin: '250px 0 auto 0',
                        paddingBottom: '20px'
                    }}
                >
                    {title}
                </p>
                <div style={{ display: 'flex', margin: '0 0 15px 0' }}>
                    <p
                        style={{
                            fontSize: '20px',
                            color: 'gray',
                        }}
                    >https://bsraya.com/{endpoint}</p>
                    <div style={{ marginLeft: 'auto', fontSize: '40px' }}>⌨️</div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}