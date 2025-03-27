import { useParams } from "react-router-dom";

import NotFound from "../NotFound";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import img1 from "../../assets/images/Donation/img1.jpg";
import img2 from "../../assets/images/Donation/img2.jpg";
import img3 from "../../assets/images/Donation/img3.jpg";
import { useState } from "react";
const dummyData = [
  {
    id: 1,
    title: "Help Manjula Save Her NICU Babies",
    targetAmount: 750000,
    raisedAmount: 225000,
    donors: [
      {
        name: "Rahul Singh",
        amount: 50000,
        message: "Get well soon!",
        time: "2 hours ago",
      },
      {
        name: "Priya Patel",
        amount: 25000,
        message: "Prayers for the babies",
        time: "5 hours ago",
      },
      { name: "Anonymous", amount: 10000, time: "1 day ago" },
      {
        name: "Amit Kumar",
        amount: 15000,
        message: "Stay strong",
        time: "2 days ago",
      },
    ],
    images: [img1, img2, img3],
    documents: [
      "https://dkprodimages.gumlet.io/campaignImages/11667/WhatsApp_Image_2024-09-30_at_18.jpg?format=webp&w=576&dpr=1.3",
    ],
    About: `
## *A Mother's Plea*

> "I need to travel from my home to the hospital every day, to see my NICU babies. They are fighting for their lives. I would walk if I could, to save money for their treatment. But I am forced to take a cab every day. It’s so far and costs so much, I feel awfully guilty. I tried auto rickshaw, but my stitches came undone during the ride, and I started bleeding profusely. I had to get stitches again, and couldn’t go to see my babies for a few days. I couldn’t take that separation. I can’t lose them forever? Help me!"

— *Manjula, mother*
![Alttext](/src/assets/images/Donation/img1.jpg)
## *Manjula’s Story: A Lifetime of Sacrifices*

For Manjula, everything good always came late in life. Being the youngest of four daughters, she sacrificed her life to take care of her widowed, paralysed mother. She was 36 when her mother passed away. Only then did she finally start living for herself.

Marriage came late. Pregnancy, too. The only thing that came early were her underweight and underdeveloped babies, born at just six months. It turned her world upside down… again.

## *A Costly Dream: IVF Treatment*

The couple sold everything they owned to afford IVF treatment.

All they wanted from life was to become parents. When doctors told them that IVF was the only way forward, they began the treatment. With a paycheck of **₹17,000/month**, Anandagopal struggled to afford his wife’s medical needs. But they were determined.

> "I took loans upon loans at work and everywhere else. We pledged the gold Manjula’s mother had left her. It still lies in the bank. We can never release it. We didn’t think IVF would cost us so much. But fortunately, my wife became pregnant with twins, and that was all that mattered. I thought that would be the end of our worries, but…"  

— *Anandagopal, father*
![Alttext](/src/assets/images/Donation/img3.jpg)

## *Born Too Soon: A Fight for Survival*

In her **6th month of pregnancy**, Manjula’s blood pressure shot up. The couple went to the doctor for BP medicine, but instead, she was rushed into surgery. A day after delivery, when Manjula woke up, her babies—a boy and a girl—were nowhere in sight. Born extremely premature, they were fighting **severe respiratory distress syndrome and sepsis** in the NICU.

> "With fresh stitches, I couldn’t get up no matter how much I tried. Five unbearable days passed before I could finally see them. And when I did, I lost all hope of ever taking them home. They were so small and fragile. They needed months of treatment that we could never afford. But we took it one day at a time, loaning money from everyone we knew, and we’ve come this far. But we can’t, anymore."  

— *Manjula, mother (breaks down)*

## *15 Lakhs Spent… and They Still Need Help*

Anandagopal, who works in a textile shop, is now buried under a mountain of debt. He doesn’t know if he’ll ever be able to repay it. But he does know one thing—he has nothing left to give. **They need ₹7.5 lakhs more to save their babies.**

> "I am afraid I can’t save them. I just wish they had been born to richer parents… someone who could afford to save them. But they chose us. Can you please help me save them? They deserve to live long lives. Please."  

— *Anandagopal, father*
![Alttext](/src/assets/images/Donation/img2.jpg)

## *How You Can Help*

Your support can save these tiny fighters. Every contribution brings them closer to a healthy life. **Please donate and share their story.**


`,
  },
];

function GoalProgress({ raisedAmount, targetAmount }) {
  const progress = (raisedAmount / targetAmount) * 100;

  return (
    <div className="w-full space-y-3 rounded-lg bg-white p-4 shadow-sm">
      <h1 className="w-fit border-b-2 border-b-pink-500 pb-1 font-semibold text-gray-800">
        Help Us Reach Our Goal
      </h1>
      <div className="flex justify-between pt-2">
        <span className="text-2xl font-bold text-gray-800">
          ₹{raisedAmount.toLocaleString()}
        </span>
        <span className="text-gray-600">
          of ₹{targetAmount.toLocaleString()}
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-pink-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{progress.toFixed(1)}% Complete</span>
        <span className="text-gray-600">
          ₹{(targetAmount - raisedAmount).toLocaleString()} to go
        </span>
      </div>
    </div>
  );
}

function RecentDonations({ donors }) {
  return (
    <div className="w-full space-y-4 rounded-lg bg-white p-4 shadow-sm">
      <h3 className="w-fit border-b-2 border-b-pink-500 pb-1 font-semibold text-gray-800">
        Recent Donations
      </h3>
      <div className="max-h-[300px] space-y-4 overflow-y-auto">
        {donors.map((donor, index) => (
          <div key={index} className="space-y-1 border-b pb-3">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-800">{donor.name}</p>
              <p className="text-pink-500">₹{donor.amount.toLocaleString()}</p>
            </div>
            {donor.message && (
              <p className="text-sm text-gray-600">{donor.message}</p>
            )}
            <p className="text-xs text-gray-400">{donor.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DonatePage() {
  const { donateId } = useParams();
  const donation = dummyData.find((d) => d.id === Number(donateId)); // Convert to number

  if (!donation) {
    return <NotFound />;
  }
  return (
    <section className="flex min-h-screen w-full flex-col-reverse gap-6 px-4 py-6 lg:flex-row lg:px-32">
      {/* Main Content */}
      <div className="order-2 w-full lg:order-1 lg:w-2/3">
        <h1 className="py-5 text-center font-quicksand text-4xl font-semibold">
          {donation.title}
        </h1>
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
              <img src={src} alt={alt} className="mx-auto w-[700px] py-10" />
            ),
          }}
        >
          {donation.About}
        </ReactMarkdown>
        <div>
          <h1 className="mb-5 w-fit border-b-2 border-b-pink-500 py-3 text-2xl font-semibold">
            Documents
          </h1>
          <div className="flex w-full space-x-5 overflow-x-auto p-5">
            {donation.documents.map((image, index) => (
              <a
                key={index}
                href={image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image}
                  alt={`Document Image ${index + 1}`}
                  className="w-40 rounded-lg"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="order-1 w-full lg:order-2 lg:w-1/3">
        <div className="sticky top-4 space-y-6">
          <Donate />
          <GoalProgress
            raisedAmount={donation.raisedAmount}
            targetAmount={donation.targetAmount}
          />
          <RecentDonations donors={donation.donors} />
        </div>
      </div>
    </section>
  );
}

function Donate() {
  // const [paymentMethod, setPaymentMethod] = useState("upi");
  const [amount, setAmount] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div className="w-full space-y-6 rounded-lg bg-white p-4 shadow-sm">
      <h2 className="w-fit border-b-2 border-b-pink-500 pb-1 text-lg font-semibold text-gray-800">
        Make a Donation
      </h2>
      <div className="top-0 flex flex-col items-center justify-center gap-2 lg:flex-row lg:items-stretch">
        <div></div>
        <div className="flex flex-col">
          <h1 className="font-semibold">
            {" "}
            How much Money would you like to contribute?(tax benefit
            included){" "}
          </h1>
          <div className="flex w-full justify-evenly py-5">
            {[1000, 2000, 5000, 10000].map((am) => (
              <button
                key={am}
                onClick={() => setAmount(am)}
                className={`rounded-md border border-pink-500 px-4 py-2 ${amount === am ? "bg-pink-500 text-white" : "text-pink-600 hover:bg-pink-50"}`}
              >
                ₹{am.toLocaleString()}
              </button>
            ))}
          </div>
          <div className="flex flex-col items-start gap-1">
            <h1>or enter a custom amount</h1>
            <input
              type="number"
              placeholder="Custom amount"
              className="w-full rounded-md border px-3 py-2 outline-none focus:border-pink-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="w-full rounded-md border px-3 py-2 outline-none focus:border-pink-500"
              // value={userData.name}
              onChange={handleInput}
            />

            <input
              type="mail"
              placeholder="Email"
              name="email"
              className="w-full rounded-md border px-3 py-2 outline-none focus:border-pink-500"
              // value={userData.email}
              onChange={handleInput}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="w-full rounded-md border px-3 py-2 outline-none focus:border-pink-500"
              // value={userData.phone}
              onChange={handleInput}
            />
          </div>
          <button
            className="mt-2 whitespace-nowrap rounded-md bg-pink-500 px-4 py-2 text-white hover:bg-pink-600"
            onClick={onSubmit}
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonatePage;
