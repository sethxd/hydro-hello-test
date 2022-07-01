import FeaturedCollections from "../components/FeaturedCollections.server"
import { Layout } from "../components/Layout.server"

export default function Home() {
  return (
    <Layout>
      <section className="p-6 md:p-8 lg:p-12">
        <h1 className="font-extrabold mb-4 text-5xl md:text-7xl hover:text-red-500">
          Hello world!
        </h1>
        <p className="font-extrabold mb-3">Welcome to Hydrogen.</p>
        <p>
          Hydrogen testing is a front-end web development framework used for
          building Shopify custom storefronts.
        </p>
        <FeaturedCollections />
      </section>
    </Layout>
  )
}
