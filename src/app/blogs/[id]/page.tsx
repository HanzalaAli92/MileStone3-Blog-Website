"use client"
import React from 'react'
import BlogsPage from "@/components/BlogsPage"

interface Description {
  heading1: string;
  paragraph1: string;
  heading2?: string; 
  paragraph2?: string;
  heading3?: string;
  paragraph3?: string;
}

interface BlogsPageProps {
  id: number;
  title: string;
  writer: string;
  description: Description[];
  image: string;
}

const blogs: BlogsPageProps[] = [
  {
    id: 1,
    title: "The Evolution of Electric Vehicles",
    writer: "Emma Green",
    description:[{
      heading1: "Early Beginnings of Electric Vehicles",
      paragraph1: "Electric vehicles (EVs) have a long history, dating back to the 19th century. The first electric car was developed in the 1820s, with innovators like Robert Anderson and Thomas Parker contributing to the development of early prototypes. These early vehicles were slow and limited in range, but they sparked interest in alternative methods of transportation. However, the rise of internal combustion engines in the early 20th century led to the decline of electric vehicles, making them a rare sight on the roads for several decades.",
      heading2: "The Rise of Modern Electric Vehicles",
      paragraph2: "In the late 20th century, concerns about pollution and fuel scarcity revived interest in electric vehicles. The 1990s marked a turning point with the introduction of the GM EV1, the first modern electric car that generated significant attention. Despite its short-lived commercial availability, it laid the foundation for a new era of electric vehicles. In the 2000s, advancements in battery technology and growing environmental concerns pushed automakers to invest in EV development. The release of models like the Tesla Roadster in 2008 demonstrated the potential of EVs, offering improved performance, range, and charging infrastructure.",
      heading3: "The Future of Electric Vehicles",
      paragraph3: "The future of electric vehicles is bright, with an increasing number of automakers shifting their focus towards sustainability and environmental responsibility. Advances in battery technology are continually improving the efficiency and range of EVs, while the expansion of charging infrastructure makes electric cars more accessible to consumers worldwide. Governments around the globe are also introducing stricter emissions standards and offering incentives for EV adoption. With the rise of autonomous driving technology and smart grid integration, the future of electric vehicles is not only about reducing emissions but also about transforming the way we live and move in a more sustainable world.",
    }
  ],   
    image: "/blog1-EE.webp",
  },
  {
    id: 2,
    title: "Mastering the Art of Cooking",
    writer: "Liam White",
    description:[{
      heading1: "The Basics of Cooking: Building a Strong Foundation",
      paragraph1: "Mastering the art of cooking begins with understanding the fundamental techniques and ingredients. Whether it's learning how to properly chop vegetables, understanding cooking times, or mastering the art of seasoning, these basics provide the foundation for more complex recipes. A deep knowledge of different cooking methods—such as boiling, sautéing, roasting, and grilling—enables cooks to experiment with a variety of dishes. Understanding these basics allows both beginners and seasoned chefs to develop a wide range of skills, making cooking a more enjoyable and creative experience.",
      heading2: "Expanding Your Culinary Repertoire",
      paragraph2: "Once you've mastered the basics, the next step is to expand your culinary repertoire. This involves experimenting with various cuisines, cooking styles, and ingredients. Whether you're delving into the world of Italian pastas, French sauces, or Asian stir-fries, each cuisine offers unique techniques and flavors that can broaden your cooking skills. Additionally, learning how to pair ingredients, create balanced meals, and experiment with presentation can elevate your dishes and bring your cooking to a whole new level.",
      heading3: "Advanced Techniques and Presentation",
      paragraph3: "For those who wish to take their cooking to the highest level, mastering advanced techniques and presentation is key. This includes refining skills like sous-vide cooking, making intricate sauces, working with advanced kitchen tools, and even molecular gastronomy. Presentation also plays a vital role in making food visually appealing. The art of plating, garnishing, and using colors creatively enhances the dining experience, turning a meal into a visual masterpiece. Mastering these advanced techniques not only boosts your culinary confidence but also allows you to explore endless possibilities in the kitchen.",
    }
  ],   
    image: "/blog2-MA.jpeg",
  },
  {
    id: 3,
    title: "The Impact of Climate Change",
    writer: "Sophia Black",
    description:[{
      heading1: "Rising Global Temperatures and Extreme Weather Events",
      paragraph1: "One of the most noticeable impacts of climate change is the rise in global temperatures. As greenhouse gases trap more heat in the Earth's atmosphere, average global temperatures have been steadily increasing. This warming leads to more frequent and severe weather events, such as heatwaves, droughts, and heavy rainfall. These extreme conditions can have devastating effects on ecosystems, agriculture, and human health. For example, prolonged heatwaves can cause crop failures, water shortages, and increased mortality rates, while heavy rainfall can lead to flooding and landslides.",
      heading2: "Melting Polar Ice and Rising Sea Levels",
      paragraph2: "The warming of the Earth is also causing polar ice caps and glaciers to melt at an unprecedented rate. This contributes to the rising sea levels, which threaten coastal communities around the world. As ice melts, it increases the volume of water in the oceans, leading to the submersion of low-lying islands and cities. Additionally, the loss of ice reduces the planet's ability to reflect sunlight, further accelerating global warming. Rising sea levels also impact marine ecosystems and disrupt the livelihoods of millions who depend on coastal resources.",
      heading3: "Loss of Biodiversity and Ecosystem Disruption",
      paragraph3: "Climate change is a major driver of biodiversity loss, as many species struggle to adapt to rapidly changing environments. Rising temperatures, changing precipitation patterns, and habitat destruction force species to migrate or face extinction. The disruption of ecosystems has far-reaching consequences for both wildlife and humans. For example, coral reefs, which are highly sensitive to temperature changes, are experiencing widespread bleaching, which affects marine life. The loss of biodiversity weakens ecosystems, making them less resilient to other environmental stressors and reducing their ability to provide essential services like clean water, pollination, and carbon sequestration.",
    }
  ],   
    image: "/blog3-CC.jpeg",
  },
  {
    id: 4,
    title: "Advances in Renewable Energy",
    writer: "William King",
    description:[{
      heading1: "Solar Power: Harnessing the Sun’s Potential",
      paragraph1: "Solar energy has seen significant advancements in recent years, making it one of the most viable renewable energy sources. New technologies like photovoltaic (PV) cells have become more efficient, allowing solar panels to capture and convert more sunlight into electricity. Additionally, innovations like bifacial solar panels, which capture sunlight from both sides, and solar roofing materials are improving energy output while reducing costs. As solar energy becomes more accessible and cost-effective, it plays an increasingly important role in reducing dependence on fossil fuels and combatting climate change",
      heading2: "Wind Energy: Powering the Future with Clean Winds",
      paragraph2: "Wind energy is another area where technology has made great strides, with both onshore and offshore wind farms becoming more efficient. The development of larger, more powerful turbines allows for higher energy capture, and advanced materials are making these turbines more durable and cost-effective. Offshore wind farms, located in areas with higher and more consistent wind speeds, are expanding rapidly, offering vast potential for clean energy generation. As wind energy technologies continue to improve, they are becoming a key part of the global push toward sustainable energy solutions.",
      heading3: "Energy Storage: Solving the Intermittency Problem",
      paragraph3: "One of the main challenges with renewable energy sources like solar and wind is their intermittency—energy production varies with sunlight and wind conditions. Advances in energy storage technologies, such as lithium-ion batteries and other innovative solutions, are addressing this issue. Large-scale battery systems and other forms of energy storage, like pumped hydro and compressed air, enable excess energy to be stored during peak production times and released when demand is high or when renewable sources aren’t generating enough power. Improved energy storage solutions are essential for integrating renewable energy into national grids and ensuring a stable and reliable energy supply.",
    }
  ],   
    image: "/blog4-RE.jpeg",
  },
  {
    id: 5,
    title: "Blockchain in Modern Technology",
    writer: "Olivia Knight",
    description:[{
      heading1: "Decentralization and Increased Security",
      paragraph1: "Blockchain technology is primarily known for its ability to decentralize systems, making them more secure and transparent. Unlike traditional centralized databases, where data is stored in a single location, blockchain distributes data across multiple nodes in a network. This decentralization eliminates the risk of single points of failure, making it harder for hackers to compromise the system. Each block of data in a blockchain is securely linked to the previous one using cryptographic techniques, ensuring that once data is recorded, it cannot be altered without altering the entire chain, which enhances security and trust.",
      heading2: "Smart Contracts and Automation",
      paragraph2: "Another significant contribution of blockchain is the introduction of smart contracts, which are self-executing contracts with the terms directly written into lines of code. These contracts automatically enforce and execute agreements without the need for intermediaries, reducing the time and cost involved in transactions. Smart contracts have the potential to revolutionize industries such as real estate, finance, and supply chain management by increasing efficiency and reducing human error or fraud. As the technology matures, more sectors are exploring how smart contracts can streamline processes and facilitate secure, automated transactions.",
      heading3: "Blockchain in Supply Chain and Data Integrity",
      paragraph3: "Blockchain is increasingly being used to enhance transparency and accountability in supply chains. By recording every transaction on an immutable ledger, blockchain allows all stakeholders in a supply chain to track the movement of goods in real time, ensuring the integrity of data. This is especially important in industries like food safety, pharmaceuticals, and luxury goods, where verifying the origin and authenticity of products is crucial. The ability to trace the complete journey of a product from manufacture to delivery increases consumer trust and helps businesses ensure compliance with regulations. Blockchain is also being used for secure data sharing and protecting intellectual property, which is becoming increasingly important in today's data-driven world.",
    }
  ],   
    image: "/blog5-RB.jpg",
  },
  {
    id: 6,
    title: "Artificial Intelligence in Healthcare",
    writer: "James Wilson",
    description:[{
      heading1: "Improved Diagnostics and Early Detection",
      paragraph1: "Artificial Intelligence (AI) is revolutionizing the way medical professionals diagnose diseases and detect health conditions at earlier stages. AI-powered systems, particularly those based on machine learning, can analyze medical images such as X-rays, MRIs, and CT scans with remarkable accuracy, helping doctors identify abnormalities and conditions like cancer, heart disease, and neurological disorders. AI tools can also process patient data, including genetic information and lifestyle factors, to predict potential health risks. Early detection through AI not only increases the chances of successful treatment but also reduces healthcare costs by preventing the need for more extensive interventions later on.",
      heading2: "Personalized Treatment and Precision Medicine",
      paragraph2: "AI is enhancing the practice of personalized medicine, where treatment plans are tailored to individual patients based on their unique characteristics. By analyzing large datasets, including genetic information, medical history, and lifestyle, AI can help doctors create more effective treatment strategies. For example, AI algorithms can recommend specific drug therapies that are most likely to work based on a patient's genetic makeup, thus optimizing treatment outcomes and reducing side effects. This approach to medicine, known as precision medicine, holds the promise of more targeted and effective care for patients, leading to better health outcomes and improved quality of life.",
      heading3: "AI in Drug Discovery and Development",
      paragraph3: "The process of discovering and developing new drugs is time-consuming and expensive. However, AI is significantly accelerating this process by analyzing vast amounts of data to identify potential drug candidates. Machine learning algorithms can quickly analyze chemical compounds and predict how they might interact with specific diseases or conditions. Additionally, AI can optimize the design of clinical trials, making them more efficient and helping to identify the most promising therapies faster. This technology is particularly important in the fight against complex diseases like cancer, Alzheimer's, and rare genetic disorders, where traditional drug discovery methods often fall short. With AI, the healthcare industry can bring life-saving treatments to market more quickly, benefiting patients around the world.",
    }
  ],   
    image: "/blog6-IH.jpeg",
  },
  {
    id: 7,
    title: "The Rise of Artificial Intelligence",
    writer: "Salina Smith",
    description:[ 
      {
        heading1: "How AI is Transforming Everyday Life",
        paragraph1: "Artificial Intelligence (AI) has come a long way from being a concept in science fiction to becoming an integral part of our daily lives. From personalized recommendations on streaming platforms to advanced medical diagnostics, AI is revolutionizing how we live, work, and interact with the world. In this blog, we will explore the rise of AI, its impact on various industries, and what the future holds for this groundbreaking technology.",
        heading2: "Understanding Artificial Intelligence",
        paragraph2: "AI refers to the simulation of human intelligence in machines designed to think, learn, and make decisions. It encompasses various technologies such as machine learning, natural language processing (NLP), and computer vision. These systems are trained to analyze data, identify patterns, and solve complex problems—often faster and more accurately than humans.",
        heading3: "The Future of AI",
        paragraph3: "The potential of AI is limitless. Innovations in areas like generative AI (e.g., ChatGPT and DALL·E) are already shaping creative industries. In the future, AI may play a critical role in tackling global challenges such as climate change, disease prevention, and sustainable development."
      }
    ],
    image: "/blog7-AI.jpg",
  },
  {
    id: 8,
    title: "5 Must-Have Apps for Productivity",
    writer: "John Smith",
    description:[{
      heading1: "Staying productive in today's fast-paced world",
      paragraph1: "Staying productive in today's fast-paced world can be challenging, but the right tools can make all the difference. With countless apps available, finding the ones that truly enhance productivity is essential. In 2024, these five must-have productivity apps stand out for their innovative features, ease of use, and ability to help you stay organized and efficient.",
      heading2: "Notion: Your All-in-One Workspace",
      paragraph2: "Notion is the ultimate app for organizing your life and work. Whether you are managing personal projects, team tasks, or taking notes, Notion's customizable workspace allows you to design your workflow exactly how you want it.",
      heading3: "Trello: Visual Task Management",
      paragraph3: "Trello is a visual task management tool that uses boards, lists, and cards to help you organize projects. Perfect for both personal and team use, Trello's flexibility makes it a favorite for productivity enthusiasts.",
    }],
    image: "/blog8-Apps.jpg",
  },
  {
    id: 9,
    title: "The Future of Quantum Computing",
    writer: "Julis Brown",
    description: [ 
      {
        heading1: "What to Expect in the Next Decade",
        paragraph1: "Quantum computing, once a theoretical concept confined to academic research, has now become one of the most exciting and transformative fields of technology. With major advancements in hardware, software, and quantum algorithms, quantum computing is on the brink of revolutionizing industries ranging from healthcare to finance. But what does the next decade hold for this groundbreaking technology? Let's explore the possibilities.",
        heading2: "Understanding Quantum Computing",
        paragraph2: "Quantum computing leverages the principles of quantum mechanics, such as superposition and entanglement, to perform complex computations exponentially faster than classical computers. While classical computers use bits as the smallest unit of information (either 0 or 1), quantum computers use quantum bits, or qubits, which can exist in multiple states simultaneously.",
        heading3: "Quantum Cloud Computing",
        paragraph3: "Quantum computing will become more accessible through cloud-based platforms. Tech giants like IBM, Amazon, and Microsoft are already offering quantum computing as a service (QCaaS). In the coming decade."
      }
    ],
    image: "/blog9-FC.jpg",
  },
  {
    id: 10,
    title: "Breaking Barriers in Space Exploration",
    writer: "Ava Brown",
    description:[{
      heading1: "Advancements in Rocket Technology",
      paragraph1: "Space exploration has made significant leaps due to advancements in rocket technology. The development of reusable rockets, like those pioneered by companies such as SpaceX, has dramatically reduced the cost of launching payloads into space. Previously, rockets were single-use, which made space missions prohibitively expensive. Today, with rockets like the Falcon 9 capable of landing back on Earth and being reused for multiple missions, space exploration is becoming more accessible. This innovation not only cuts costs but also opens up the possibility of more frequent and sustainable space missions, allowing for deeper exploration of the Moon, Mars, and beyond.",
      heading2: "Private Sector’s Role in Space Exploration",
      paragraph2: "The private sector is playing an increasingly vital role in advancing space exploration. Companies like SpaceX, Blue Origin, and Virgin Galactic are not only developing technologies that can transport humans into space but are also creating the infrastructure to make space travel more commercially viable. Space tourism, which was once a distant dream, is now becoming a reality, with private companies aiming to offer suborbital flights to the general public. The involvement of private companies has injected fresh ideas, competition, and funding into space exploration, accelerating technological advancements and pushing the boundaries of what is possible.",
      heading3: "International Collaboration and the Future of Human Space Travel",
      paragraph3: "International collaboration is key to the future of space exploration. Partnerships between space agencies like NASA, the European Space Agency (ESA), Roscosmos, and China’s CNSA have led to the successful construction of space stations like the International Space Station (ISS), which serves as a platform for research and international cooperation in space. Looking forward, these collaborations are crucial for ambitious goals like sending humans to Mars, establishing a permanent human presence on the Moon, and exploring asteroids for mining. As nations unite their resources and expertise, humanity is on the brink of expanding its reach in space, aiming to explore further and establish a sustainable presence beyond Earth.",
    }
  ],   
    image: "/blog10-BB.jpeg",
  },
  {
    id: 11,
    title: "The Secrets of Financial Independence",
    writer: "Mason Davis",
    description:[{
      heading1: "The Power of Saving and Budgeting",
      paragraph1: "Achieving financial independence starts with developing disciplined saving and budgeting habits. By consistently saving a portion of your income and tracking your expenses, you can begin building wealth over time. Budgeting allows you to identify unnecessary spending and allocate funds toward important financial goals, such as retirement savings or investments. The more you save early in life, the more your money can compound, ultimately leading to a more secure financial future. Living below your means and having a clear financial plan are essential steps on the path to financial independence.",
      heading2: "Investing Wisely for Long-Term Growth",
      paragraph2: "Investing is one of the most effective ways to build wealth and achieve financial independence. Instead of simply saving, investing allows your money to grow through returns on stocks, bonds, real estate, or mutual funds. The key is to focus on long-term growth by diversifying your investments and being patient. Compounding interest works in your favor when you invest early and consistently. By making smart investment decisions, such as contributing to retirement accounts like 401(k)s or IRAs, you can secure a future where your wealth works for you, ultimately providing passive income streams.",
      heading3: "Building Multiple Streams of Income",
      paragraph3: "Relying solely on a single income source can delay your journey to financial independence. Building multiple streams of income—whether through side businesses, freelance work, or passive income from investments—can accelerate wealth creation. Diversifying income sources reduces risk and provides financial security in case one source is interrupted. For instance, rental properties, dividends from stocks, or royalties from intellectual property can supplement your primary income. By expanding your sources of income, you increase your ability to save, invest, and achieve financial independence faster, ultimately giving you more control over your financial future.",
    }
  ],   
    image: "/blog11-SF.jpg",
  },
  {
    id: 12,
    title: "The Psychology of Happiness",
    writer: "Isabella Moore",
    description:[{
      heading1: "Understanding the Science Behind Happiness",
      paragraph1: "Happiness is not just an abstract feeling; it has a scientific basis rooted in psychology and neuroscience. Research shows that happiness is influenced by a combination of genetic predispositions, life circumstances, and intentional activities. Neurotransmitters like dopamine and serotonin play a key role in creating positive emotions. However, long-term happiness often depends on factors such as meaningful relationships, personal growth, and a sense of purpose. By understanding the psychological and biological aspects of happiness, individuals can take intentional steps to improve their well-being.",
      heading2: "The Role of Gratitude and Positive Thinking",
      paragraph2: "Practicing gratitude and maintaining a positive mindset are powerful tools for boosting happiness. Gratitude helps shift focus from what is lacking to what is already present, fostering a sense of contentment and appreciation. Positive thinking, on the other hand, helps individuals reframe challenges and setbacks in a way that reduces stress and promotes resilience. Studies have shown that individuals who regularly practice gratitude and focus on the positive aspects of life report higher levels of happiness and overall satisfaction.",
      heading3: "The Importance of Social Connections and Purpose",
      paragraph3: "Happiness is deeply intertwined with social connections and a sense of purpose. Strong relationships with family, friends, and community provide emotional support, reduce feelings of loneliness, and enhance overall well-being. Similarly, having a sense of purpose gives life meaning and direction, contributing to lasting happiness. Whether it’s pursuing a career you’re passionate about, volunteering, or working toward personal goals, a sense of purpose aligns daily actions with a larger vision, creating a fulfilling and joyful life.",
    }
  ],   
    image: "/blog12-PH.jpeg",
  },
  {
    id: 13,
    title: "The Art of Mindfulness",
    writer: "Gabriel Cruise",
    description: [{
      heading1: "Understanding Mindfulness",
      paragraph1: "In today's fast-paced world, where distractions abound and stress levels are ever-increasing, mindfulness has emerged as a powerful tool to bring calm, focus, and balance to our lives. Rooted in ancient practices yet perfectly suited for modern challenges, mindfulness is the art of being fully present in the moment, without judgment or distraction. This guide explores the essence of mindfulness, its benefits, and how to incorporate it into your daily life.",
      heading2: "What is Mindfulness",
      paragraph2: "Mindfulness is the practice of deliberately focusing your attention on the present moment. It involves observing your thoughts, emotions, and physical sensations without judgment. Rather than dwelling on the past or worrying about the future, mindfulness encourages a deep awareness of the here and now.",
      heading3: "The Benefits of Mindfulness",
      paragraph3: "The art of mindfulness is a lifelong practice that can profoundly enhance your quality of life. By cultivating awareness and presence, you can navigate life's challenges with greater ease and appreciate its beauty in every moment. Start small, be consistent, and watch as mindfulness transforms your life, one breath at a time."
    }],
    image: "/blog13-Mind.jpg",
  },
  {
    id: 14,
    title: "Plant-Based Diets",
    writer: "Alizabeth Raef",
    description: [{
      heading1: "A Guide to Healthy Eating for a Sustainable Future",
      paragraph1: "In recent years, plant-based diets have gained significant popularity due to their numerous health benefits and positive environmental impact. Whether you are considering transitioning to a plant-based lifestyle or just curious about what it entails, this blog will provide you with a comprehensive overview of plant-based diets, their health benefits, and how to make the shift seamlessly.",
      heading2: "What is a Plant-Based Diet?",
      paragraph2: "A plant-based diet focuses primarily on whole, unprocessed plant foods, including fruits, vegetables, grains, legumes, nuts, and seeds. While it does not necessarily mean being 100% vegan or vegetarian, the goal is to minimize the consumption of animal products and prioritize plant-derived foods.",
      heading3: "Conclusion",
      paragraph3: "Plant-based diets offer a wealth of health benefits and contribute to a more sustainable future. By incorporating more plant-based foods into your diet, you can improve your well-being, reduce your environmental footprint, and enjoy a diverse and flavorful range of meals. Whether you choose to go fully plant-based or simply reduce your intake of animal products, every small step counts toward a healthier planet and a healthier you."
    }],
    image: "/blog14-Plant.jpg",
  },
  {
    id: 15,
    title: "Exercises for a Healthier Lifestyle",
    writer: "Sam Doe",
    description: [{
      heading1: "Stay Fit, Feel Great",
      paragraph1: "Maintaining a healthy lifestyle is essential for overall well-being, and one of the most effective ways to do so is through regular exercise. Exercise not only helps you stay in shape, but it also boosts your mental health, energy levels, and longevity. Whether you are just starting or are already an experienced fitness enthusiast, here are some exercises that can help you lead a healthier and more active lifestyle.",
      heading2: "Walking and Hiking",
      paragraph2: "If you prefer low-impact exercises, walking and hiking are excellent choices. Walking is easy on the joints and can be done daily. Hiking, especially on trails with varied terrain, provides a great cardio workout and strengthens the lower body.",
      heading3: "Conclusion",
      paragraph3: "Exercise is a cornerstone of a healthy lifestyle. It helps improve physical health, boosts mental well-being, and contributes to a long, fulfilling life. Whether you are looking to improve cardiovascular fitness, build strength, enhance flexibility, or boost energy, there is an exercise for everyone. The key is to find activities you enjoy and stay consistent with them. By making exercise a regular part of your life, you are investing in your health for the long term."
    }],
    image: "/blog15-Health.jpg",
  }
];

const Page = ({params}: any) => {
  const reqBlog = blogs && blogs.find((blog) => blog.id == params.id)
  const {title, writer, description, image}: any = reqBlog
  console.log(title, "destructuring the title")

  return (
    <div className="bg-light-teal">
      <BlogsPage id={params.id} title={title} writer={writer} description={description} image={image} />
    </div>
  )
}

export default Page
