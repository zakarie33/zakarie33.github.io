export type HardwareProject = {
  slug: string;
  title: string;
  domain: 'IoT' | 'Robotics';
  status: string;
  summary: string;
  hardwareSpecs: string[];
  sensorsModules: string[];
  softwareArchitecture: string;
  technicalDescription: string;
  circuitDiagramPath: string;
  images: string[];
  videoUrl: string;
  sourceCodeUrl: string;
};

/** Add verified IoT and robotics projects here. */
export const hardwareProjects: HardwareProject[] = [];

export function getHardwareBySlug(slug: string): HardwareProject | undefined {
  return hardwareProjects.find((p) => p.slug === slug);
}

export function hasHardwarePortfolio(): boolean {
  return hardwareProjects.length > 0;
}