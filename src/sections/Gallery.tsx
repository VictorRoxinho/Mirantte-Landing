import styled from 'styled-components';
import { theme } from '../styles/theme';
import { GALLERY_IMAGES } from '../lib/constants';

const GalleryContainer = styled.section`
  background-color: ${theme.colors.neutral['50']};
  padding: ${theme.spacing.xxxl} 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xxl} 1.5rem;
  }
`;

const GalleryContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.neutral['900']};
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${theme.shadows.md};
`;

const GalleryImage = styled.div<{ $imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const GalleryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${theme.spacing.md};
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: ${theme.colors.neutral.white};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  opacity: 0;
  transition: ${theme.transitions.default};

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

export const Gallery = () => {
  return (
    <GalleryContainer id="gallery">
      <GalleryContent>
        <SectionTitle>Conheça o Mirantte</SectionTitle>
        <GalleryGrid>
          {GALLERY_IMAGES.map((image) => (
            <GalleryItem key={image.id}>
              <GalleryImage $imageUrl={image.url} />
              <GalleryOverlay>{image.name}</GalleryOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </GalleryContent>
    </GalleryContainer>
  );
};
