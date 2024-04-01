import React from 'react';
import Button from '../components/Button';

const WelcomingPage = () => {
  return (
    <>
      <div className="container h-screen relative">
        <div className="bg-red-500 w-36 h-screen absolute right-0"></div>

        <div className="p-12 flex flex-row">
          <div className="">
            <h1 className="text-5xl font-bold pb-10">Welcome Message</h1>
            <p className="pb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              temporibus blanditiis quasi corrupti, quaerat officiis illum dicta
              impedit magnam quas sint quos, aspernatur accusamus sit. Est rem
              fugiat expedita eveniet consectetur incidunt voluptate? Tenetur
              laboriosam autem provident, dignissimos asperiores fuga!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              aspernatur quaerat ratione aliquid itaque est totam iste? Tempora
              consequuntur accusamus quasi minima. Iusto minima illo odit sit
              minus quae velit.
            </p>
            <p className="text-2xl font-bold pt-9">John Doe</p>
            <p>Chief Executive Operations</p>
          </div>
          <div className="z-10 grid justify-items-end">
            <img
              src="https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg"
              alt=""
              width={900}
              className="rounded-xl mb-5"
            />
            <Button className="w-10">Next</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomingPage;
