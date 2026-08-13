export class PathConfig {
  private value: string;
  private parent: PathConfig | null;

  private constructor(value: string, parent: PathConfig | null) {
    this.value = value;
    this.parent = parent;
  }

  public get path(): string {
    return this.value;
  }

  public get fullPath(): string {
    if (this.parent === null) return `/${this.value}`;
    return `/${this.parent.fullPath}/${this.value}`;
  }

  public static authorization(): PathConfig {
    return new PathConfig('authorization', null);
  }

  public static register(): PathConfig {
    return new PathConfig('register', this.authorization());
  }

  public static login(): PathConfig {
    return new PathConfig('login', this.authorization());
  }
}
