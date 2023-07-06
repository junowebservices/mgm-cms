import React from "react";
import Layout from "../components/Layout";

const Calendar = () => {
  return (
    <Layout>
      <div className="lg:h-[80vh] my-12 grid place-content-center inside gap-4 lg:gap-12 max-w-4xl">
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-4xl font-bold">
            Welcome to National Museum Month's Calendar of Events!
          </h2>
          <p className="text-lg">
            Experience the richness of our cultural heritage and explore the
            captivating world of museums through a diverse range of events and
            activities. Discover the vibrant lineup of exhibitions, workshops,
            guided tours, and more, specially curated for National Museum Month.
            Join us as we celebrate the invaluable contributions of museums in
            preserving history, art, and knowledge.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Calendar Coming Soon!
          </h2>
          <p className="text-lg">
            We are in the process of finalizing the calendar of events for
            National Museum Month. Our team is working tirelessly to bring you
            an exceptional array of experiences that showcase the best of our
            national museums. Stay tuned as we update this page with the full
            calendar, complete with dates, times, and details of each event. In
            the meantime, mark your calendars and get ready for a month-long
            celebration of our cultural treasures. Prepare to be inspired,
            educated, and entertained as we embark on a journey through the
            captivating world of museums. For any inquiries or to stay updated
            on National Museum Month's events, please reach out to our dedicated
            team at [contact information]. We appreciate your patience and look
            forward to sharing an unforgettable month with you! Note: The
            calendar of events will be available shortly. Please check back soon
            for updates.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
