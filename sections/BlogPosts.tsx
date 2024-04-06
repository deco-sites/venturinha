import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import { ComponentChildren, Fragment } from "preact";
import { useId } from "../sdk/useId.ts";

export interface CTA {
  text?: string;
}

/** @title {{{title}}} */
export interface Post {
  url?: string;
  title?: string;
  author?: string;
  excerpt?: string;
  image?: ImageWidget;
  date?: string;
  readingTime?: string;
  tags?: string[];
}

export interface Props {
  cta?: CTA;
  posts?: Post[];
  pagination?: {
    /**
     * @title First page
     * @description Leave it as 0 to start from the first page
     */
    page?: number;
    /** @title items per page */
    perPage?: number;
  };
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

function Container({ children }: { children: ComponentChildren }) {
  return (
    <div class="container lg:mx-auto lg:py-14 mx-2 py-12 text-sm">
      <div class="space-y-8">{children}</div>
    </div>
  );
}

export default function BlogPosts({
  cta = { text: "Show more" },
  posts = [
    {
      url: "/",
      title: "Title of blogpost #1",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #2",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #3",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #4",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #5",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #6",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #7",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #8",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #9",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #10",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #11",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #12",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      url: "/",
      title: "Title of blogpost #13",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
  ],
  pagination: {
    page = 0,
    perPage = 6,
  } = {},
}: Props) {
  const from = perPage * page;
  const to = perPage * (page + 1);

  // It's boring to generate ids. Let's autogen them
  const postList = useId();

  // Get the HTMX link for this section
  const fetchMoreLink = usePartialSection({
    mode: "append",
    // Renders this section with the next page
    props: {
      pagination: { perPage, page: page + 1 },
    },
  })["f-partial"];

  const ContainerComponent = page === 0 ? Container : Fragment;

  return (
    <ContainerComponent>
      <>
        <div class="gap-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {posts.slice(from, to).map((post) => (
            <a
              href={post.url}
              class="border border-secondary overflow-hidden rounded-lg"
            >
              <Image
                width={380}
                height={274}
                class="object-fit w-full"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={post.image || ""}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-6 space-y-4">
                <div class="font-semibold">{post.readingTime}</div>
                <div class="space-y-2">
                  <h3 class="text-2xl">{post.title}</h3>
                  <p class="text-base">{post.excerpt}</p>
                </div>
                <div class="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <div class="badge badge-lg badge-primary text-xs">
                      {tag}
                    </div>
                  ))}
                </div>
                <div class="flex flex-wrap gap-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        {to < posts.length && (
          <div class="flex justify-center w-full" id={postList}>
            <button
              hx-get={fetchMoreLink}
              hx-swap="outerHTML"
              hx-target={`#${postList}`}
              aria-label={cta.text}
              class="btn btn-primary"
            >
              <span class="inline [.htmx-request_&]:hidden">
                {cta.text}
              </span>
              <span class="loading loading-spinner hidden [.htmx-request_&]:block" />
            </button>
          </div>
        )}
      </>
    </ContainerComponent>
  );
}
