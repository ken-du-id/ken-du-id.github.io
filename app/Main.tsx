import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Image from 'next/image'
import { memo } from 'react'

const MAX_DISPLAY = 5

type PostItem = {
  slug: string
  date: string
  title: string
  summary: string
  tags: string[]
}

export default function Home({ posts }: { posts: PostItem[] }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {/* HEADER / HERO */}
        <header className="pb-6 pt-6 md:pb-8 md:pt-10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-8 md:px-6">
            {/* Scholar card */}
            <aside className="md:col-span-3">
              <div className="rounded-xl border border-gray-200 bg-white/70 p-5 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    {/* 注意：使用 next/image；profile 可设 priority 提升 LCP */}
                    <Image
                      src="/static/images/profile.jpg"
                      alt="Kang Du profile"
                      width={240}
                      height={240}
                      priority
                      sizes="(max-width: 768px) 40vw, 240px"
                      className="h-28 w-28 rounded-lg object-cover ring-1 ring-gray-200 dark:ring-gray-800"
                    />
                  </div>
                  <div className="min-w-0">
                    <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                      杜康 (Kang Du)
                    </h1>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      PhD (HKUST-GZ) · Simulation & 3DGS · Inverse Rendering
                    </p>
                    <p className="mt-2 break-all text-sm text-gray-700 dark:text-gray-300">
                      <b>kdu800(at)connect.hkust-gz.edu.cn</b>
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                      <Link
                        href="/static/doc/CV-WX-Kank-Du.pdf"
                        className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-500 dark:decoration-gray-700"
                        prefetch={false}
                      >
                        CV
                      </Link>
                      <span className="text-gray-400">·</span>
                      <Link
                        href="https://www.linkedin.com/in/kang-du-473a9647/"
                        className="hover:underline"
                        prefetch={false}
                      >
                        LinkedIn
                      </Link>
                      <span className="text-gray-400">·</span>
                      <Link href="https://github.com/dukang" className="hover:underline" prefetch={false}>
                        GitHub
                      </Link>
                      <span className="text-gray-400">·</span>
                      <Link
                        href="https://space.bilibili.com/588878976"
                        className="hover:underline"
                        prefetch={false}
                      >
                        Bilibili
                      </Link>
                    </div>
                  </div>
                </div>

                {/* News (可选迷你动态，更学术风) */}
                <div className="mt-5 border-t border-dashed border-gray-200 pt-4 text-sm dark:border-gray-800">
                  <h3 className="mb-2 font-medium text-gray-900 dark:text-gray-100">News</h3>
                  <ul className="list-inside space-y-1 text-gray-700 marker:text-gray-400 dark:text-gray-300">
                    <li>Oct 2025 — Attending ICCV (Honolulu), sharing GS-ID & simulation work.</li>
                    <li>Sep 2025 — Preprint on Light-Aware GS submitted.</li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Bio & Experience */}
            <section className="md:col-span-5">
              <div className="prose prose-gray max-w-none dark:prose-invert">
                <h2 className="mb-3 text-[1.35rem]">Short Bio</h2>
                <p className="!mt-0 text-[0.98rem] leading-7 text-gray-700 dark:text-gray-300">
                  {siteMetadata.description}
                </p>

                <h3 className="mt-6 text-[1.1rem]">Experience</h3>
                <ul className="mt-2 grid list-outside grid-cols-1 gap-2 pl-5 text-[0.98rem] marker:text-gray-400 sm:grid-cols-2">
                  <li>
                    <span className="font-medium">[Aug 2024]</span> tech lead, Ant Group; PhD, HKUST-GZ
                  </li>
                  <li>
                    <span className="font-medium">[Aug 2023]</span> MBA, HKU
                  </li>
                  <li>
                    <span className="font-medium">[Oct 2022]</span> Project Manager, Tencent
                  </li>
                  <li>
                    <span className="font-medium">[May 2021]</span> Programmer Specialist, Meituan
                  </li>
                  <li>
                    <span className="font-medium">[May 2020]</span> Programmer, ByteDance
                  </li>
                  <li>
                    <span className="font-medium">[May 2015]</span> Founded a startup; BS, Texas A&amp;M
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </header>

        {/* POSTS */}
        <section aria-label="Recent posts" className="mx-auto max-w-6xl px-4 pb-8 pt-2 md:px-6">
          {!posts.length && (
            <p className="py-8 text-sm text-gray-600 dark:text-gray-400">No posts found.</p>
          )}

          <ul className="divide-y divide-gray-100 dark:divide-gray-800">
            {posts.slice(0, MAX_DISPLAY).map((post) => (
              <PostRow key={post.slug} post={post} />
            ))}
          </ul>

          {posts.length > MAX_DISPLAY && (
            <div className="mt-6 flex justify-end">
              <Link
                href="/blog"
                className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                aria-label="All posts"
                prefetch={false}
              >
                All Posts &rarr;
              </Link>
            </div>
          )}
        </section>
      </div>
    </>
  )
}

/** 单行学术风文章卡片（轻量、纯文本、懒加载） */
const PostRow = memo(function PostRow({ post }: { post: PostItem }) {
  const { slug, date, title, summary, tags } = post
  return (
    <li className="py-6">
      <article className="grid grid-cols-1 gap-2 md:grid-cols-12 md:gap-4">
        <div className="md:col-span-2">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-[0.9rem] text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
            </dd>
          </dl>
        </div>

        <div className="md:col-span-10">
          <h2 className="text-[1.05rem] font-semibold leading-6 tracking-tight">
            <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100" prefetch={false}>
              {title}
            </Link>
          </h2>

          {tags?.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          )}

          <p className="mt-2 line-clamp-2 text-[0.98rem] text-gray-600 dark:text-gray-400">{summary}</p>

          <div className="mt-2">
            <Link
              href={`/blog/${slug}`}
              className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              aria-label={`Read more: "${title}"`}
              prefetch={false}
            >
              Read more →
            </Link>
          </div>
        </div>
      </article>
    </li>
  )
})
