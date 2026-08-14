export class PathConfig {
  private static readonly AUTHORIZATION: PathConfig = new PathConfig('authorization', null);
  private static readonly REGISTER: PathConfig = new PathConfig("register", PathConfig.AUTHORIZATION);
  private static readonly LOGIN: PathConfig = new PathConfig("login", PathConfig.AUTHORIZATION);

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

  public static get authorization(): PathConfig {
    return PathConfig.AUTHORIZATION;
  }

  public static get register(): PathConfig {
    return PathConfig.REGISTER;
  }

  public static get login(): PathConfig {
    return PathConfig.LOGIN;
  }
}
