import { Embed } from "@dsalvagni/react-bsky-embed";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col gap-8 max-w-[600px]">
        <div className="text-slate-900 dark:text-gray-100">
          <h1 className="text-3xl leading-1">React Bluesky Embed component</h1>
          <p className="dark:text-slate-400 py-1">
            I'm using the template from{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://embed.bsky.app/"
              target="_blank"
            >
              https://embed.bsky.app/
            </a>{" "}
            to render the post content according to the Bluesky app design, and
            consuming the API via{" "}
            <code>
              <a
                href="https://www.npmjs.com/package/@atproto/api"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                @atproto/api
              </a>
            </code>{" "}
            sdk.
          </p>
          <p className="dark:text-slate-400 py-1">
            It's still missing <code>i18n</code> though. I done a simple
            implementation with <code>i18n-next</code>, but it doesn't work for
            all scenarios. I'd like to be able to render different posts in
            different languages.
          </p>
          <p className="dark:text-slate-400 py-1">
            Below there's a collection of posts with different contents that I'm
            using to <em>validate</em> the use cases.
          </p>
        </div>
        <div className="text-slate-900 dark:text-gray-100">
          <h1 className="text-2xl">Text only</h1>
        </div>
        <Embed url="https://bsky.app/profile/did:plc:adt43uj5b7eibg3clyyt4gnu/post/3knqtlco5bk2e?ref_src=embed" />
        <div className="text-slate-900 dark:text-gray-100">
          <h1 className="text-2xl">4 Images gallery</h1>
        </div>
        <Embed url="https://bsky.app/profile/pokemongems.bsky.social/post/3laelm77jq522" />
        <div className="text-slate-900 dark:text-gray-100">
          <h1 className="text-2xl">Nested Quoted with Media</h1>
        </div>
        <Embed url="https://bsky.app/profile/danabra.mov/post/3la7q65jian2r" />
        <div className="text-slate-900 dark:text-gray-100">
          <h1 className="text-2xl">2 Images gallery</h1>
        </div>
        <Embed url="https://bsky.app/profile/foxpopvli.bsky.social/post/3laeofumhoq2f" />
        <div className="text-slate-900 dark:text-gray-100">
          <h1 className="text-2xl">One Image</h1>
        </div>
        <Embed url="https://bsky.app/profile/catsofyore.bsky.social/post/3laeuej66xr2z" />
        <div className="text-slate-900 dark:text-gray-100">
          <h1 className="text-2xl">External Gif</h1>
        </div>
        <Embed url="https://bsky.app/profile/alltooalina.swifties.social/post/3laemh2geu22x" />
        <div className="text-slate-900 dark:text-gray-100">
          <h1 className="text-2xl">Video</h1>
        </div>
        <Embed url="https://bsky.app/profile/b0tster.bsky.social/post/3laeqlarvnk23" />
        <div className="text-slate-900 dark:text-gray-100">
          <h1 className="text-2xl">Quoted with Media</h1>
        </div>
        <Embed url="https://bsky.app/profile/tudorgirba.com/post/3lajjx4jwts2h" />
        <div className="text-slate-900 dark:text-gray-100">
          <h1 className="text-2xl">External Link</h1>
        </div>
        <Embed url="https://bsky.app/profile/jaspstats.bsky.social/post/3laegaxiqdv2g" />
        <div className="text-slate-900 dark:text-gray-100">
          <h1 className="text-2xl">Hashtags</h1>
        </div>
        <Embed url="https://bsky.app/profile/octakitten.bsky.social/post/3l7z4mzrr4p2z" />
        <div className="text-slate-900 dark:text-gray-100">
          <h1 className="text-2xl">Invalid URL</h1>
        </div>
        <Embed url="https://bsky.app/profile/any-invalid-profile-url/post/with-invalid-post" />
      </div>
    </div>
  );
}
