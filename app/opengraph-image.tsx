import { ImageResponse } from 'next/og';

export const alt = 'Tabrizi Bakery - Watertown, MA';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1C140F',
          color: '#FAF7F2',
          padding: '60px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '22px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#A2752E',
            marginBottom: '20px',
          }}
        >
          Watertown, Massachusetts
        </div>
        <div
          style={{
            fontSize: '68px',
            fontWeight: 'normal',
            letterSpacing: '0.04em',
            marginBottom: '18px',
          }}
        >
          Tabrizi Bakery
        </div>
        <div
          style={{
            fontSize: '28px',
            fontWeight: 300,
            color: 'rgba(250, 247, 242, 0.85)',
            maxWidth: '850px',
            lineHeight: 1.4,
          }}
        >
          Persian Pastries, Breads & Specialty Goods
        </div>
        <div
          style={{
            marginTop: '36px',
            fontSize: '20px',
            color: '#A2752E',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          56A Mount Auburn Street • (617) 926-0880
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
