import { motion } from "framer-motion";
import mail from "../assets/images/email.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";

const dummyData = [
  {
    name: "John Doe",
    role: "Founder",
    image: "https://placehold.co/400x400/EEE/31343C",
    links: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      mail: "mailto:john@example.com",
    },
  },
  {
    name: "Jane Smith",
    role: "CEO",
    image: "https://placehold.co/400x400/EEE/31343C",
    links: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      mail: "mailto:jane@example.com",
    },
  },
  {
    name: "Michael Johnson",
    role: "CTO",
    image: "https://placehold.co/400x400/EEE/31343C",
    links: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      mail: "mailto:michael@example.com",
    },
  },
  {
    name: "Emily Davis",
    role: "CFO",
    image: "https://placehold.co/400x400/EEE/31343C",
    links: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      mail: "mailto:emily@example.com",
    },
  },
  {
    name: "David Brown",
    role: "COO",
    image: "https://placehold.co/400x400/EEE/31343C",
    links: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      mail: "mailto:david@example.com",
    },
  },
  {
    name: "Emma Wilson",
    role: "Marketing Head",
    image: "https://placehold.co/400x400/EEE/31343C",
    links: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      mail: "mailto:emma@example.com",
    },
  },
  {
    name: "Daniel Martinez",
    role: "Lead Developer",
    image: "https://placehold.co/400x400/EEE/31343C",
    links: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      mail: "mailto:daniel@example.com",
    },
  },
  {
    name: "Sophia Anderson",
    role: "HR Manager",
    image: "https://placehold.co/400x400/EEE/31343C",
    links: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      mail: "mailto:sophia@example.com",
    },
  },
  {
    name: "James Taylor",
    role: "Product Manager",
    image: "https://placehold.co/400x400/EEE/31343C",
    links: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      mail: "mailto:james@example.com",
    },
  },
];

function Aboutus() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="mb-4 font-quicksand text-5xl font-bold text-gray-800">
          The <span className="text-pink-500">Team</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Meet the visionaries behind Real Heart Foundation who are dedicated to
          making a difference.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 lg:px-72"
      >
        {dummyData.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </motion.div>
    </div>
  );
}

function MemberCard({ name, role, image, links }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -5 }}
      className="group flex flex-col items-center rounded-lg bg-stone-100 p-10"
    >
      <div className="relative mb-4 overflow-hidden rounded-full">
        <motion.img
          src={image}
          alt={name}
          className="h-48 w-48 transform object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="mb-1 text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-md rounded-full bg-pink-100 px-4 py-1 font-medium text-pink-600">
        {role}
      </p>
      <div className="mt-4 flex gap-5 py-2">
        <a
          href={links.twitter}
          style={{ backgroundImage: `url(${twitter})` }}
          className="h-5 w-5 bg-cover"
        />

        <a
          href={links.facebook}
          style={{ backgroundImage: `url(${facebook})` }}
          className="h-6 w-6 bg-cover"
        />
        <a
          href={links.mail}
          style={{ backgroundImage: `url(${mail})` }}
          className="h-6 w-6 bg-cover"
        />
      </div>
    </motion.div>
  );
}

export default Aboutus;
