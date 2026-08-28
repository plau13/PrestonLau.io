export const iconColors = {
  background: '#1e3a5f',
  foreground: '#fafaf8',
};

export function renderSiteIcon(size) {
  const fontSize = Math.round(size * 0.42);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: iconColors.background,
        color: iconColors.foreground,
        fontSize,
        fontWeight: 600,
        letterSpacing: '-0.06em',
        fontFamily: 'Georgia, "Times New Roman", serif',
      }}
    >
      PL
    </div>
  );
}
