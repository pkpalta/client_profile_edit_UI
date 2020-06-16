export const THEMES: Theme[] = [
  { value: "default", label: "Default" },
  { value: "sunset", label: "Sunset" },
  { value: "greeny", label: "Greeny" },
  { value: "beach", label: "Beach" },
  { value: "tech", label: "Tech" },
  { value: "sweetHues", label: "Sweet Hues" },
  { value: "defaultDark", label: "Default Dark" },
  { value: "deepOcean", label: "Deep Ocean" },
  { value: "slate", label: "Slate" },
  { value: "mainThemeDark", label: "Main Theme Dark" },
  { value: "mainThemeLight", label: "Main Theme Light" }
];

export class Theme {
  public value: string;
  public label: string;
}
