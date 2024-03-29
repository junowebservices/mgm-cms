import React, { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const EventsTab = () => {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Historical Walking Tour: Unveiling the Secrets of our City",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Interactive Art Workshop: Exploring Colors and Emotions",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Hands-On Archaeology Workshop: Unearthing Ancient Artifacts?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "Lecture Series: Exploring the Evolution of Modern Art",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Photography Exhibition: Capturing the Essence of our Heritage",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "Music Performance: Harmonies of the Past and Present",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="pt-6 widest">
      <Tab.Group>
        <Tab.List className="flex justify-center">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  " border-mainOrange border px-3 py-2",
                  selected ? "bg-mainOrange text-white" : "text-mainOrange "
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="bg-mainOrange py-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className="bg-white py-14 mx-2">
              <div className="grid md:grid-cols-2 gap-6 inside">
                <div>
                  <h2 className="text-2xl font-bold lg:text-3xl mb-4">
                    Calendar of Activities{" "}
                    <span className="text-lg font-normal">10.00.2023</span>
                  </h2>

                  <ul className="block">
                    {posts.map((post) => (
                      <li key={post.id} className=" py-2 px-3">
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
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold lg:text-3xl mb-4">
                    Column 2{" "}
                    <span className="text-lg font-normal">10.00.2023</span>
                  </h2>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default EventsTab;
