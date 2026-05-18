import type { LocalizedString } from "../../i18n/interfaces";

export class HardSkillCategory {
  public static readonly ProgrammingLanguage = new HardSkillCategory(
    "prog-lang",
    { "es-ES": "Lenguajes de Programación", "en-US": "Programming Languages" },
    "fa-solid fa-code",
  );
  public static readonly Frameworks = new HardSkillCategory(
    "fwk",
    { "es-ES": "Frameworks", "en-US": "Frameworks" },
    "fa-solid fa-cubes",
  );
  public static readonly Libraries = new HardSkillCategory(
    "lib",
    { "es-ES": "Librerías", "en-US": "Libraries" },
    "fa-solid fa-puzzle-piece",
  );
  public static readonly Databases = new HardSkillCategory(
    "dbs",
    { "es-ES": "Bases de Datos", "en-US": "Databases" },
    "fa-solid fa-database",
  );
  public static readonly Tools = new HardSkillCategory(
    "tool",
    { "es-ES": "Herramientas y Tecnologías", "en-US": "Tools & Technologies" },
    "fa-solid fa-toolbox",
  );
  public static readonly OtherLanguages = new HardSkillCategory(
    "other-lang",
    { "es-ES": "Otros Lenguajes", "en-US": "Other Languages" },
    "fa-solid fa-language",
  );
  public static readonly ArchitectureAndConcepts = new HardSkillCategory(
    "arch",
    { "es-ES": "Arquitectura y Conceptos", "en-US": "Architecture & Concepts" },
    "fa-solid fa-sitemap",
  );
  public static readonly AgileMethodologies = new HardSkillCategory(
    "agile",
    { "es-ES": "Metodologías Ágiles", "en-US": "Agile Methodologies" },
    "fa-solid fa-arrows-spin",
  );
  private constructor(
    public readonly key: string,
    public readonly name: LocalizedString,
    public readonly faIcon: string,
  ) {}
}