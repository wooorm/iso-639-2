declare module "iso-639-2" {
  export interface Language {
    iso6392B: string;
    iso6392T?: string;
    iso6391?: string;
    name: string;
  }

  const iso6392: Language[];
  export default iso6392;
}
