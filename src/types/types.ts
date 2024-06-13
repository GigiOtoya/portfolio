export type Project = {
  project: ProjectData;
};

export type ProjectData = {
  name: string;
  stack: string[];
  description: string;
  versions: ProjectVersion[];
  image: string;
};

export type ProjectVersion = {
  version: string;
  demo: string;
  src: string;
};

export type AboutData = {
  intro: string;
  about: string[];
  stack: string[];
};
