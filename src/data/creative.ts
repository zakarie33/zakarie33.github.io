export type CreativeCategory =
  | 'Branding'
  | 'Logo Design'
  | 'Social Media Design'
  | 'Posters'
  | 'Marketing Materials'
  | 'Digital Artwork'
  | 'Promotional Videos'
  | 'Motion Graphics'
  | 'Short-form Video'
  | 'Creative Editing'
  | 'Project Showreels';

export type CreativeMedium = 'graphic' | 'video';

export type CreativeWork = {
  id: string;
  title: string;
  medium: CreativeMedium;
  category: CreativeCategory;
  description: string;
  thumbnail: string;
  mediaPath: string;
  /** YouTube/Vimeo embed URL when medium is video */
  videoEmbedUrl: string;
};

/** Add real design and video samples under public/images/creative/ */
export const creativeWorks: CreativeWork[] = [];

export function hasCreativePortfolio(): boolean {
  return creativeWorks.length > 0;
}