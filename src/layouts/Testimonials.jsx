import React from "react";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="w-full grid place-items-center my-12 mt-4 "
    >
      <h1 className=" text-4xl font-semibold text-center lg:text-start text-brightColor ">
        Testimonials
      </h1>
      <div class=" w-[80%] grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 dark:bg-gray-800">
        <figure class="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-white">Very Good !</h3>
            <p class="my-4">
              I underwent an ACL and Meniscus surgery on my left knee in Delhi.
              I had to moved to my village after availing initial 15 days
              physiotherapy at concerned Hospital. Arranging a physiotherapist
              in village was next to impossible for me and I started to search
              on internet for the possible options and came to know about
              YourPhysio"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
              <div className="text-gray-500">Bonnie Green</div>
              <div class="text-sm text-gray-400 ">Developer at Open AI</div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-white">
              Solid Helthcare doctors
            </h3>
            <p class="my-4">
              Yes, very much. It was my good luck to have been associated with
              YourPhysio. In the early year 2020 my wife had muscle tear in
              right hand shoulder. All doctors advised for surgery but with no
              full recovery guarantee.
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium text-white text-left rtl:text-right ms-3">
              <div className="text-gray-500">Roberta Casas</div>
              <div class="text-sm text-gray-400">Lead designer at Dropbox</div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-400">
            <h3 class="text-lg font-semibold text-white">
              Mindblowing assistance from Your Physio!
            </h3>
            <p class="my-4">
              Your Physio , post my knee cartilage-tear surgery (5th surgery in
              total) and fear of inability to walk again, with their
              professional guidance, assurance and weekly, regular Doctor
              reviews, has me not want to stop them and definitely recommend
              them to all worldwide!"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            />

            <div class="space-y-0.5 font-medium text-white text-left rtl:text-right ms-3">
              <div className="text-gray-500">Jese Leos</div>
              <div class="text-sm text-gray-400">
                Software Engineer at Facebook
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center  border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-white">Efficient Process!</h3>
            <p class="my-4">
              I've been using the program since November 2021 and am still
              signed in, with the current one being my second extension."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div className="text-gray-500">Joseph McFall</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                CTO at Google
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Testimonials;
