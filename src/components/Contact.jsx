import React from "react";

const Contact = props => {
  return (
    <div className="documentation">
      <div className="documentHeader">About Project</div>
      <div className="topicRow">
        <div className="topicLabel">Tools & Technologies</div>
        <div className="topicDesc">
          <p>ReactJS</p>
          <p>Redux, React-Redux, Redux-Thunk, Axios, gh-pages</p>
          <p>HTML, CSS, SASS</p>
          <p>Jest and Enzyme</p>
        </div>
      </div>
      <div className="topicRow">
        <div className="topicLabel">React App</div>
        <div className="topicDesc">
          <p>SPA(Single Page Application) with React-router</p>
          <p>3 Views - Home, Project and Docs</p>
          <p>Project - ShoppingCart App</p>
        </div>
      </div>
      <div className="topicRow">
        <div className="topicLabel">API</div>
        <div className="topicDesc">
          <a alt="jsonLink" href="https://jsonplaceholder.typicode.com">
            JSONPlaceHolder
          </a>{" "}
          - Fake Online REST API for Testing and Prototyping
          <p>https://jsonplaceholder.typicode.com/</p>
        </div>
      </div>
      <div className="topicRow">
        <div className="topicLabel">
          <p>Photos API </p>
        </div>
        <div className="topicDesc">
          <a alt="jsonLink" href="https://jsonplaceholder.typicode.com/photos">
            PHOTOS
          </a>
          <p>https://jsonplaceholder.typicode.com/photos</p>
        </div>
      </div>
      <div className="topicRow">
        <div className="topicLabel">
          <p>Repository </p>
        </div>
        <div className="topicDesc">
          <a alt="git" href="https://github.com">
            GITHUB
          </a>
          <p>https://github.com</p>
        </div>
      </div>
      <div className="topicRow">
        <div className="topicLabel">
          <p>Live Demo</p>
        </div>
        <div className="topicDesc">
          <a alt="git" href="https://sijujacobs.github.io/impetusproject/">
            Demo
          </a>
          <p>https://sijujacobs.github.io/impetusproject/</p>
        </div>
      </div>
      <div className="topicRow">
        <div className="topicLabel">
          <p>Source Code </p>
        </div>
        <div className="topicDesc">
          <a alt="git" href="https://github.com/sijujacobs/impetusproject">
            Project
          </a>
          <p>https://github.com/sijujacobs/impetusproject</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
// export default withRouter(Contact);
// const RoutedContact = RoutedComponent({ path: "/docs" })(Contact);
// export default RoutedContact;
