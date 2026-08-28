'use client';

import styled from 'styled-components';
import Image from 'next/image';

const Frame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || '16 / 10'};
  background: ${({ $background }) => $background || 'var(--bg-muted)'};
  border: 1px solid
    ${({ $background }) => ($background === '#000000' ? '#000000' : 'var(--border)')};
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
`;

const Placeholder = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
  font-size: var(--fz-sm);
`;

const DiagramPlaceholder = styled(Placeholder)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--bg-muted) 0%, var(--bg-surface) 100%);
`;

const MediaEmbed = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 280px;
  border: 0;
`;

export default function CaseStudyMedia({
  mediaType = 'placeholder',
  mediaLabel,
  mediaUrl,
  screenshot,
  mediaFit = 'contain',
  mediaBackground,
  mediaAspectRatio,
}) {
  if (mediaType === 'loom' && mediaUrl) {
    return (
      <Frame>
        <MediaEmbed src={mediaUrl} title={mediaLabel || 'Product demo'} allowFullScreen />
      </Frame>
    );
  }

  if (mediaType === 'pdf' && mediaUrl) {
    return (
      <Frame>
        <MediaEmbed src={mediaUrl} title={mediaLabel || 'Document preview'} />
      </Frame>
    );
  }

  if (mediaType === 'image' && screenshot) {
    return (
      <Frame $background={mediaBackground} $aspectRatio={mediaAspectRatio}>
        <Image
          src={screenshot}
          alt={mediaLabel || 'Project screenshot'}
          fill
          style={{ objectFit: mediaFit, objectPosition: 'center' }}
        />
      </Frame>
    );
  }

  if (mediaType === 'diagram') {
    return (
      <Frame>
        <DiagramPlaceholder>
          <span aria-hidden="true">◇ → □ → ◇</span>
          <span>{mediaLabel || 'Architecture diagram coming soon'}</span>
        </DiagramPlaceholder>
      </Frame>
    );
  }

  return (
    <Frame>
      <Placeholder>{mediaLabel || 'Product demo coming soon'}</Placeholder>
    </Frame>
  );
}
