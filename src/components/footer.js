import Link from 'next/link'

export default function Footer() {
    return (
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            <Link
                href="/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                Home
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
            </p>
            </Link>
            <Link
                href="/about"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                About
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
            </Link>

            <Link
                href="/projects"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                Project
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
            </Link>

            <Link
                href="/contact"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                Contact
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
            </Link>
        </div>
    )
}