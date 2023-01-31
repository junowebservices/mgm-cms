import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Tab } from "@headlessui/react";
import { Link, graphql, StaticQuery } from "gatsby";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function EventTabsTemplate({ data }) {
  const { edges: events } = data.allMarkdownRemark;
  const [tags, setTags] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    events.map((event) =>
      setTags((prevState) => [...prevState, ...event.node.frontmatter.tags])
    );
  }, [events]);

  let uniqueTags = [...new Set(tags.map((tag) => tag))];

  var currentTime = new Date();
  var today = currentTime.toLocaleDateString();

  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <section className="widest">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex overflow-scroll md:overflow-auto md:justify-center inside">
          {uniqueTags.map((category, id) => (
            <Tab
              key={id}
              className={({ selected }) =>
                classNames(
                  "w-full md:w-[unset] hover:text-white border-mainOrange border-2 hover:bg-mainOrange py-2 min-w-[150px] md:min-w-[unset] md:px-4",
                  selected && "bg-mainOrange text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
          {/* {Object.keys(events).map((category) => (
             
            ))} */}
        </Tab.List>
        {/* <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List> */}
        <Tab.Panels className="border-8 border-mainOrange">
          <div className="inside px-4 md:px-0">
            <div className="grid md:grid-cols-2 place-items-start py-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold">
                  Calendar of Activities
                </h3>
                <p className="font-normal text-base block md:inline">{today}</p>
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel key={idx} className={classNames(" bg-white")}>
                    <ul>
                      {posts.map((post) => (
                        <li
                          key={post.id}
                          className="relative rounded-md px-1 md:px-3 py-3  hover:bg-gray-300"
                        >
                          <h3 className="text-sm font-medium leading-5">
                            {post.title}
                          </h3>

                          <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                            <li>{post.date}</li>
                            <li>&middot;</li>
                            <li>{post.commentCount} comments</li>
                            <li>&middot;</li>
                            <li>{post.shareCount} shares</li>
                          </ul>

                          <a
                            href="#"
                            className={classNames(
                              "absolute inset-0 rounded-md",
                              "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                            )}
                          />
                        </li>
                      ))}
                    </ul>
                  </Tab.Panel>
                ))}
              </div>
              <div className="">
                <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                  Upcoming
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                  laborum dolores esse. Quis voluptas, molestiae excepturi fuga
                  ratione perferendis reprehenderit. Expedita commodi laborum,
                  illo totam suscipit laudantium atque doloremque ex.
                </p>
              </div>
            </div>
          </div>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}

EventTabs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function EventTabs() {
  return (
    <StaticQuery
      query={graphql`
        query EventListQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "event-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  tags
                  templateKey
                  date(formatString: "MM/DD/YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <EventTabsTemplate data={data} count={count} />}
    />
  );
}
