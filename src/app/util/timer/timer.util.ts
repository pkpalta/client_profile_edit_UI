/**
 * A timer utility
 */
export class TimerUtil {
  /**
   * Delay the passed number of milliseconds
   * @param milliseconds - The number of milliseconds to delay
   */
  public static async delay(milliseconds: number) {
    return new Promise(res => setTimeout(res, milliseconds));
  }
}
