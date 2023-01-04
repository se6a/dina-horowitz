export async function handle({event, resolve}) {
  const userAgent = event?.request?.headers?.get("user-agent") || "";
  event.locals.isIE = userAgent.includes("Trident/7.0;") || userAgent.includes("; MSIE ");

  return await resolve(event);
}
