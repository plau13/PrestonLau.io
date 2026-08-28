import { ImageResponse } from 'next/og';
import { renderSiteIcon } from '@/lib/siteIcon';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(renderSiteIcon(size.width), {
    ...size,
  });
}
