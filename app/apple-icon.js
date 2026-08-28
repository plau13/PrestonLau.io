import { ImageResponse } from 'next/og';
import { renderSiteIcon } from '@/lib/siteIcon';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(renderSiteIcon(size.width), {
    ...size,
  });
}
