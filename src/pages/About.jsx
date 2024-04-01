import React from 'react';

function About() {
  return (
    <>
      <div className="flex flex-row">
        <img src="../src/assets/img/workplace.jpg" alt="" width={367} />
        <div className="flex flex-col pl-10 w-[700px] pt-10">
          <h1 className="text-5xl font-bold text-gray-600">About Us</h1>
          <p className="pt-8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            voluptatum deleniti aperiam eaque distinctio molestias perspiciatis
            sed magni, sequi repellat id quasi expedita veniam tenetur,
            obcaecati iure accusamus ea suscipit quos at laborum, ab corporis? A
            ab ipsam hic vitae aspernatur fugiat nulla. Aut, tempore fuga sint
            ex corporis praesentium!
          </p>
          <p className="pt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, modi placeat. Dignissimos natus laudantium distinctio,
            necessitatibus, laboriosam in, facilis illo a vel pariatur ab
            nesciunt velit magnam quasi dolor culpa laborum quidem assumenda.
            Laborum nostrum voluptatem numquam natus? Provident esse distinctio
            aliquam nam beatae odio quidem ullam libero, reprehenderit
            accusamus?
          </p>
        </div>
        <div className="bg-red-500 w-36 h-screen absolute right-0"></div>
      </div>
    </>
  );
}

export default About;
