import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen"

export default function FeaturedCollections() {
  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  })

  return (
    <section className="w-full gap-4 md:gap-8 grid">
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
        Collections
      </h2>
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg_gap-6 grid-cols-1 false sm:grid-cols-3 false false">
        {collections.nodes.map((collection) => {
          return (
            <Link
              className="group"
              key={collection.id}
              to={`/collections/${collection.handle}`}>
              <div className="grid gap-4">
                {collection?.image && (
                  <Image
                    className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover transition-all group-hover:object-top group-hover:brightness-50"
                    width={"100%"}
                    height={336}
                    alt={`Image of ${collection.title}`}
                    data={collection.image}
                  />
                )}
                <h2 className="whitespace-pre-wrap max-w-prose font-medium text-copy group-hover:text-white z-10 transition-all text-center group-hover:font-extrabold group-hover:-my-36">
                  {collection.title}
                </h2>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

const QUERY = gql`
  query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart", sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`
