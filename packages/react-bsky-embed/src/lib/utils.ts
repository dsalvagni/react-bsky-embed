import { agent } from "./api";

export class InvalidURLError extends Error {
  name = "InvalidURLError";
  constructor(e: Error) {
    super(e.message);
  }
}

export class FailedToFetch extends Error {
  name = "FailedToFetch";
  constructor(e: Error) {
    super(e.message);
  }
}

export function getProfileURL(handle: string) {
  return `https://bsky.app/profile/${handle}`;
}

export function getPostIds(url: string): { profileId: string; postId: string } {
  /** Regular expression to capture values after 'profile' and 'post'
   * profile\/: Matches the literal string "profile/".
   * ([^\/]+): Matches and captures one or more characters that are not / (i.e., the value after "profile/").
   * .*: Matches any characters in between (to account for any middle section).
   * post\/([^\/]+): Matches the literal string "post/" and then captures the value after it (similar to how we did for "profile/").
   */
  const regExpFindProfileAndPostId = /profile\/([^\/]+).*post\/([^\/?]+)/;

  const path = new URL(url).pathname;
  const details = path.match(regExpFindProfileAndPostId);

  if (details) {
    const profileId = details[1]; // "did:plc:adt43uj5b7eibg3clyyt4gnu"
    const postId = details[2]; // "3knqtlco5bk2e"

    return { profileId, postId };
  }
  throw new InvalidURLError(new Error("Invalid URL"));
}

export async function getPostThread(url: string) {
  try {
    const { profileId, postId } = getPostIds(url);

    try {
      const response = await agent.getPostThread({
        uri: `at://${profileId}/app.bsky.feed.post/${postId}`,
        depth: 0,
      });

      return response.data.thread;
    } catch (e) {
      throw new FailedToFetch(e);
    }
  } catch (e) {
    throw new InvalidURLError(e);
  }
}

export function getPostURLFromURI(uri: string, handle: string) {
  const regex = /(did:plc:[a-z0-9]+)\/app\.bsky\.feed\.post\/([a-z0-9]+)/i;
  const match = uri.match(regex);

  if (match) {
    return `https://bsky.app/profile/${match[1]}/post/${match[2]}`;
  }

  return `https://bsky.app/profile/${handle}`;
}

export function getHashtagURL(tag: string) {
  const stripped = tag[0] === "#" ? tag.slice(1) : tag;
  return `https://bsky.app/hashtag/${stripped}`;
}
