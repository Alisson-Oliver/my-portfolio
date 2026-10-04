export type Lang = "pt" | "en";

export type Localized = { pt: string; en: string };

export const l = (pt: string, en: string): Localized => ({ pt, en });

export type DiagramNode = {
  id: string;
  col: 0 | 1 | 2;
  row: number;
  label: Localized;
  sub: Localized;
};

export type DiagramSpec = {
  nodes: DiagramNode[];
  edges: [string, string][];
  caption: Localized;
};

export type Decision = { title: Localized; text: Localized };

export type Project = {
  id: string;
  name: Localized;
  year: string;
  kind: Localized;
  context: Localized;
  role: Localized;
  code: Localized;
  link?: string;
  site?: string;
  draft?: boolean;
  tagline: Localized;
  overview: Localized[];
  diagram: DiagramSpec;
  decisions: Decision[];
  stack: string;
};
