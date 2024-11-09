# react-bsky-embed

I'm using the template from https://embed.bsky.app/ to render the post content according to the Bluesky app design, and consuming the API via @atproto/api sdk.

It's still missing i18n though. I done a simple implementation with i18n-next, but it doesn't work for all scenarios. I'd like to be able to render different posts in different languages.

Below there's a collection of posts with different contents that I'm using to validate the use cases.

Code available: https://github.com/dsalvagni/react-bsky-embed

## Getting started

Install `@dsalvagni/react-bsky-embed` package.

```
  npm install "@dsalvagni/react-bsky-embed"
```

Import it into your page.

```js
import { Embed } from "@dsalvagni/react-bsky-embed";

export function Page() {
  return (
    <>
      <Embed url="https://bsky.app/profile/danabra.mov/post/3la62zxt4rs2j" />
    </>
  );
}
```
