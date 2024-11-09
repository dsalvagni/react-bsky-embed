import { PropsWithChildren } from "react";

/**
 * Simple card to diplay error messages
 */
export function ErrorCard({ children }: PropsWithChildren) {
  return (
    <>
      <div className="w-full bg-white hover:bg-neutral-50 relative transition-colors max-w-[600px] min-w-[300px] flex border rounded-xl dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-gray-100 dark:border-slate-700">
        <div className="relative flex-1 px-4 pt-3 pb-2.5 z-20 ">
          <div className="flex-1 flex-col flex gap-2">
            <div className="flex gap-2.5 items-center">
              <div className="text-sm break-word break-words whitespace-pre-wrap">
                {children}
              </div>
              <div className="flex-1"></div>
              <a
                href="https://bsky.app/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className=" transition-transform hover:scale-110 shrink-0 self-start"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%20320%20286'%3e%3cpath%20fill='rgb(10,122,255)'%20d='M69.364%2019.146c36.687%2027.806%2076.147%2084.186%2090.636%20114.439%2014.489-30.253%2053.948-86.633%2090.636-114.439C277.107-.917%20320-16.44%20320%2032.957c0%209.865-5.603%2082.875-8.889%2094.729-11.423%2041.208-53.045%2051.719-90.071%2045.357%2064.719%2011.12%2081.182%2047.953%2045.627%2084.785-80%2082.874-106.667-44.333-106.667-44.333s-26.667%20127.207-106.667%2044.333c-35.555-36.832-19.092-73.665%2045.627-84.785-37.026%206.362-78.648-4.149-90.071-45.357C5.603%20115.832%200%2042.822%200%2032.957%200-16.44%2042.893-.917%2069.364%2019.147Z'/%3e%3c/svg%3e"
                  className="h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
