import { useParams } from "react-router-dom";
import BlogNotfound from "./BlogNotFound";
import { ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import remarkGfm from "remark-gfm";
const BlogData = [
  {
    id: "1",
    date: "10/12/2024",
    title: "Education in India: A Lifeline for Underprivileged Children",
    content: `# Education in India: A Lifeline for Underprivileged Children
![Alttext](https://placehold.co/600x400/EEE/31343C)
Education is not just a fundamental right but a pathway to empowerment, growth, and social change. Yet, in India, millions of underprivileged children remain deprived of this basic necessity. The lack of access to quality education perpetuates a vicious cycle of poverty, leaving many children without the skills or opportunities needed to improve their lives.  

At **Real Happiness Of Life Foundation**, we believe that every child deserves the chance to learn and thrive, regardless of their socioeconomic background. Through our dedicated efforts, we are working to bridge the educational gap and bring hope to children who need it the most.  

## The State of Education for Underprivileged Children in India  

Despite the government’s efforts to improve access to education, India still faces significant challenges:  

1. **High Dropout Rates:** Many children, especially in rural and tribal areas, drop out of school due to financial constraints, lack of infrastructure, and cultural barriers.  
2. **Gender Disparities:** Girls face additional challenges, including early marriage, societal norms, and limited access to schools, further reducing their chances of receiving an education.  
3. **Lack of Resources:** Even when children are enrolled in schools, the quality of education is often compromised due to a shortage of teachers, inadequate facilities, and limited learning materials.  
4. **Impact of Poverty:** Families struggling to meet basic needs often prioritize survival over education, forcing children into labor instead of classrooms.  

## The Role of Real Happiness Of Life Foundation  

Understanding the critical need to address these challenges, **Real Happiness Of Life Foundation** launched its **Mission Education Program** to empower underprivileged children through education. Our approach focuses on ensuring access, quality, and sustainability in education.  

1. **Access to Education:** We work with local communities to identify out-of-school children and help them enroll in schools. This includes providing financial support for school fees, uniforms, and books.  
2. **Community Awareness:** By conducting awareness campaigns, we educate parents and guardians about the long-term benefits of education, encouraging them to prioritize their children’s schooling.  
3. **Holistic Support:** Our programs go beyond academics by addressing the nutritional, emotional, and developmental needs of children, ensuring they can focus on learning.  
4. **Skill Development:** We also offer vocational training and life skills workshops, equipping children with practical tools to secure a brighter future.  

## Impact of Education on Underprivileged Communities  

Education has the power to transform lives and communities. By providing children with the opportunity to learn, we are:  

- **Breaking the Cycle of Poverty:** Educated children have better chances of securing stable jobs and improving their families' economic conditions.  
- **Empowering Girls:** Educating girls leads to healthier families, improved livelihoods, and stronger communities.  
- **Building Future Leaders:** Education nurtures creativity, critical thinking, and leadership skills, empowering children to drive positive change in their communities.  

## Join the Mission  

At **Real Happiness Of Life Foundation**, we are committed to creating a future where every child has access to quality education and the opportunity to achieve their dreams. However, this mission requires collective effort.  

### Here’s how you can help:  
- **Sponsor a Child:** Help cover the cost of education for a child in need.  
- **Volunteer Your Time:** Become a mentor or teacher to support children’s learning journeys.  
- **Donate Resources:** Provide books, stationery, or digital tools to enhance education in underserved areas.  
- **Spread the Word:** Share our mission and encourage others to support this cause.  

Education is more than just learning; it is a gateway to hope, opportunity, and change. For India’s underprivileged children, it represents a lifeline to a better future. Together, we can ensure that no child is left behind.  

Let’s come together to make education accessible to all. To learn more about our initiatives or to support the **Mission Education Program**, visit [www.rhlf.org](http://www.rhlf.org) or contact us at **contact@rhlf.org**.  

Together, we can create a world where every child has the chance to dream, learn, and succeed.
`,
  },
];

function BlogPost() {
  const { blogId } = useParams();
  const blog = BlogData.find((b) => b.id === blogId); // Find the blog by ID

  if (!blog) {
    return <BlogNotfound />;
  }

  return (
    <>
      <div className="mx-auto px-10 py-10 lg:px-80">
        <p className="text-center"> {blog.date}</p>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="py-5 text-center text-4xl font-bold">
                {children}
              </h1>
            ),
            p: ({ children }) => (
              <p className="py-2 leading-relaxed text-gray-800">{children}</p>
            ),
            a: ({ href, children }) => (
              <a className="text-pink-400" href={href}>
                {children}
              </a>
            ),
            ul: ({ children }) => (
              <ul className="list-inside list-disc py-1">{children}</ul>
            ),
            img: ({ src, alt }) => (
              <img src={src} alt={alt} className="mx-auto py-10" />
            ),
          }}
        >
          {blog.content}
        </ReactMarkdown>
        <div className="pt-10">
          <h2 className="w-fit border-b-4 border-pink-500 pb-2 text-xl font-bold lg:text-3xl">
            Share This Article
          </h2>
          <div className="flex gap-4 py-7">
            <a href="#" className="text-blue-900">
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://x.com/rhlfofficial"
              target="_"
              className="text-blue-500"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.youtube.com/@rhlfofficialngo"
              target="_"
              className="text-red-500"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://www.instagram.com/rhlfofficial/"
              target="_"
              className="text-pink-600"
            >
              <FaInstagram size={30} />
            </a>
            <a href="#" className="text-blue-700" target="_">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
        <div className="pt-10">
          <Link
            to="/blogs"
            className="flex w-fit items-center gap-1 pb-2 font-semibold hover:text-pink-500"
          >
            <span>Read More Articles</span> <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
