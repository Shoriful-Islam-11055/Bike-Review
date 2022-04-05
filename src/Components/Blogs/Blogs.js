import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-card-title">Some Questions and & Answers</h1>
      <div>
        <div className="card container mt-3 p-3 shadow-lg">
          <div className="card-header fs-4 fw-bold bg-success text-white">Answer No.1</div>
          <div className="card-body">
            <h5 className="card-title fs-4 fw-bold">About Context API</h5>
            <p className="card-text text-start fs-5">
              React Context is a way for delivering props from parent to child
              components by storing them in a store (related to Redux) and
              allowing child components to use these props from the store
              instead of providing them manually at each level of the element
              graph. Without having to explicitly transmit data through props,
              the Context API may be used to communicate data with different
              components. For example, the Context API is suitable for theming,
              user language, authentication, and other use cases.
            </p>
          </div>
        </div>
        <div>
          <div className="card container mt-3 p-3 shadow-lg">
            <div className="card-header fs-4 fw-bold  bg-success text-white">Answer No.2</div>
            <div className="card-body">
              <h5 className="card-title fs-4 fw-bold">What is semantic tag and Advantage?</h5>
              <p className="card-text text-start fs-5">
              The function of the HTML element is explicitly defined by semantic tags. It also specifies the sort of material that should be included in the element. It's a lot simpler to read now. When you look at the first piece of code that uses semantic components, this is typically the first thing you'll notice. This is only one example; as a programmer, you may read hundreds or thousands of lines of code. The easier that code is to read and understand, the easier your work will be. It is more easily accessible. You are not alone in finding semantic aspects to be more understandable. Search engines and assistive technology (such as screen readers for visually impaired people) can better grasp the context and content of your website, resulting in a better user experience.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card container mt-3 p-3 shadow-lg mb-3">
            <div className="card-header fs-4 fw-bold  bg-success text-white">Answer No.3</div>
            <div className="card-body">
              <h5 className="card-title fs-4 fw-bold">About Context API</h5>
              <p className="card-text text-start fs-5">
              One of the most essential considerations when deciding which HTML element to utilize in markup is inline versus block. Semantics are also important, and this should be kept in mind at all times. However, the way your page is displayed has a direct influence on how it looks. Inline indicates the information flows against the page's layout; it may also flow around other floating components, but it essentially renders as text. The element renders as a block, on its own line, much like a div. You can give a width and height for a block, but it will always appear as a rectangle. Inline blocks combine the ability to enclose the element's contents in a rectangle with the flexibility to arrange the element against the layout of the page flow, just like an inline element. It's an inline block, as the name implies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
